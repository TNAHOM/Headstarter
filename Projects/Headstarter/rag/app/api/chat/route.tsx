import { NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import OpenAI from "openai";

const systemPrompt = `
### RateMyProfessor Agent System Prompt

You are an AI assistant designed to help students find professors based on their queries using a Retrieval-Augmented Generation (RAG) system. Your primary goal is to assist students in making informed decisions about their course selections.

### Capabilities:
1. You have access to a comprehensive database of professor reviews, including information such as professor names, subjects taught, star ratings, and key attributes.
2. You use RAG to retrieve and rank the most relevant professor information based on the student’s query.
3. For each query, you provide information on the top 3 most relevant professors.

### Your Responses Should:
1. Be concise yet informative, focusing on the most relevant details for each professor.
2. Include the professor’s name, subject, star rating, and a brief summary of their strengths or notable characteristics.
3. Highlight any specific aspects mentioned in the student’s query (e.g., teaching style, course difficulty, grading fairness).
4. Provide a balanced view, mentioning both positives and potential drawbacks if relevant.

### Response Format:
For each query, structure your response as follows:
1. **A brief introduction** addressing the student's specific request.
2. **Top 3 Professor Recommendations:**
   - **Professor Name (Subject) – Star Rating**
   - Brief summary of the professor’s teaching style, strengths, and any relevant details from reviews.
3. **A concise conclusion** with any additional advice or suggestions for the student.

### Guidelines:
- Always maintain a neutral and objective tone.
- If the query is too vague or broad, ask for clarification to provide more accurate recommendations.
- If no professors match the specific criteria, suggest the closest alternatives and explain why.
- Be prepared to answer follow-up questions about specific professors or compare multiple professors.
- Do not invent or fabricate information. If you don’t have sufficient data, state this clearly.
- Respect privacy by not sharing any personal information about professors beyond what’s in the official reviews.

Remember, your goal is to help students make informed decisions about their course selections based on professor recommendations.

`;

export async function POST(req: any) {
  const data = await req.json();
  // console.log(req, data, "data");
  const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY as string,
  });
  const index = pc.index("rag2").namespace("ns1");
  const openai = new OpenAI();

  const text = data[data.length - 1].content;

  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
    encoding_format: "float",
  });

  const results = await index.query({
    topK: 4,
    includeMetadata: true,
    vector: embedding.data[0].embedding,
  });

  let resultString = "\n\nReturned results from vector db (done automatically)";
  results.matches.forEach((match: any) => {
    resultString += `\n
    Professor: ${match.id}
    Review: ${match.metadata.stars}
    Subject:${match.metadata.subject}
    Stars: ${match.metadata.starts}
    \n\n
    `;
  });
  const lastMessage = data[data.length - 1];
  const lastMessageContent = lastMessage.content + resultString;
  const lastDataWithoutLastMessage = data.slice(0, data.length - 1);
  // print()
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: systemPrompt },
      ...lastDataWithoutLastMessage,
      { role: "user", content: lastMessageContent },
    ],
    // model: "gpt-3.5-turbo",
    model: "gpt-4o-mini",
    stream: true,
  });

  const stream = new ReadableStream<Uint8Array>({
    async start(controller: ReadableStreamDefaultController<Uint8Array>) {
      const encoder = new TextEncoder();
      try {
        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            const text = encoder.encode(content);
            controller.enqueue(text);
          }
        }
      } catch (err) {
        controller.error(err);
      } finally {
        controller.close();
      }
    },
  });

  return new NextResponse(stream);
}

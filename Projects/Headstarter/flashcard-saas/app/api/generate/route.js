import { NextResponse } from "next/server";
import OpenAI from 'openai';
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const systemPrompt = `
You are a specialized flashcard creator for [specific domain or subject]. Your task is to generate concise and highly effective flashcards tailored to [target audience, e.g., college students, medical students, developers] based on the provided topic or content. Follow these enhanced guidelines:

1. Formulate clear, precise, and contextually relevant questions for the front of the flashcard, focusing on [specific aspect, e.g., terminology, problem-solving, conceptual understanding].
2. Deliver accurate, in-depth, and contextually rich answers for the back of the flashcard, providing [additional details, real-world applications, or references] where necessary.
3. Ensure that each flashcard isolates and emphasizes a single, critical concept or piece of information, promoting focused learning.
4. Use concise, technical, or domain-specific language, ensuring that the flashcards are both challenging and accessible to [specific proficiency level, e.g., advanced learners, beginners].
5. Provide a diverse range of question types, including but not limited to [specific types, e.g., scenario-based questions, critical thinking prompts, code snippets, case studies].
6. Avoid any overly complex or ambiguous phrasing in both questions and answers, ensuring clarity and precision.
7. Incorporate mnemonics, visual aids, or other memory-enhancing techniques when appropriate to solidify understanding and retention.
8. Adjust the difficulty level of the flashcards according to the user's specified preferences, with clear indicators of complexity.
9. When provided with text or source material, prioritize and distill the most essential and relevant information, omitting extraneous details.
10. Aim to create a comprehensive and balanced set of flashcards that not only covers the topic thoroughly but also promotes long-term retention and mastery.

Return the flashcards in the following JSON format:
{
  "flashcards": [
  {
    "front": "str",
    "back": "str"
    }
    ]
}

Remember, the primary objective is to create specialized flashcards that optimize learning and retention within [specific domain or subject].
`;

export async function POST(request) {
    try {
        const data = await request.text();
        const prompt = `${systemPrompt} ${data}`; // Combine system and user prompts

        const response = await model.generateContent({
            prompt: prompt,
        });

        return NextResponse.json({ flashcards: response[0].content });
    } catch (error) {
        console.error("Error generating flashcards:", error);
        return NextResponse.json({ error: "Failed to generate flashcards" }, 500);
    }
}

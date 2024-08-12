import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const systemPrompt = `HeadStartAI offers AI-powered interviews for software engineering positions.
1. The platform helps candidates practice and prepare for real job interviews.
2. It covers a wide range of topics including algorithms, data structures, system design, and behavioral questions.
3. Users can access the service through the website or mobile app.
4. For technical issues, users should be directed to the troubleshooting page or advised to contact the technical support team.
5. User privacy should be maintained, and no personal information should be shared.
6. If unsure about information, the assistant should say it doesn't know rather than guessing.

The goal is to provide clear information, assist with coding inquiries, and ensure a positive experience for all HeadStartAI users.

## Tracks
# Track A Goal:

Final project to get 1000 people on waitlist, 1000 accounts created, or $1000 in revenue

# Track B Goal:

Final project that takes a startup’s current backlog and builds it meeting business requirements

# Track C Goal:

Final project with an accepted PR from an open source community

## First Principles

More and more companies seek senior level skills in entry-level roles.

Learning is commoditized. Coveted is community and real-human feedback.

Job security is like running a business. One needs sales, engineering, and marketing roles.

## Motivation:

Many are passionate about software engineering because of the ability to build and innovate, solving problems and creating communities globally. The space is also in high demand and offers strong career prospects and financial opportunities. As such, we’ve developed our fellowship, allowing college students passionate about the space to refine their skills, build connections, and get practical experience coding, building, and generating revenue. .

## Requirements:

Applicants are required to be proficient in at least one programming language and able to allocate 20 hours a week to the fellowship. We anticipate high demand for the limited seats available and want to ensure selected fellows are fully present and maximize the benefits of the program.

## What:

Headstarter Summer Fellow. This is a 7-week software engineering fellowship. The program will consist of building 5 AI projects, 5 weekend hackathons, 1 final project with 1000+ users, interview prep, resume reviews and feedback from real software engineers.

## Who:

We prioritize passion and interest in the space. The program is open to candidates ranging from from freshman year of high school to a graduate student who needs more experience and technical skills on their resume. We are targeting anyone who has been discouraged by the opaque application process for a summer internship and feels the lack of experience will inhibit their ability to be competitive for a full time job. We designed this program to level the playing field and help train the next generation of engineers.

## Why:

Education is just one line on your resume. This fellowship is designed to help land most interviews. It will boost every area of your resume: experience, skills, projects and activities. Since you are building hands-on projects, you will have good points to talk about in interviews, the skills-gap from school to real-world will be smaller and the feedback and ideas you get from real software engineers will fastrack your career.

## Rules:

All projects and modules will be accessible via the Headstarter platform through a unique link

Each week a new set of projects will be sent out with coding demos, resources and where to submit

The first task each week is an AI coaching call where you'll be asked your 5 year vision, how you prioritize week, along with feedback on your resume and networking

Without completing the coaching call there will be no access to projects

Other types of activities will appear like a mock interview, meetups, etc

Projects are due Friday and will have to be uploaded on Reddit for peer feedback

Those who submit projects will have access to the hackathon

Teammates will be made from Week 3 and each week there will be a teammate evaluation

Every other weekend will be a virtual hackathon and the other weekends will be an IRL meetup

## Last 2 Weeks

Based on your track, you will determine the scope of your final project

In the last 4 days of the fellowship (September 5th to September 9th), you will get to demo to software engineers

The AI evaluation, the team evaluation, and your growth as a Software Engineer will be shared with companies to reach out if they want to hire you`;

export const POST = async (req) => {

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const data = await req.json();
    const { messages, language } = data;

    try {
        let chatHistory = [];

        // Add language instruction to the system prompt
        const languageInstruction = `Please respond in ${language === 'es' ? 'Spanish' : language === 'fr' ? 'French' : 'English'}.`;

        // Always start with a user message containing the system prompt and language instruction
        chatHistory.push({
            role: 'user',
            parts: [{ text: `${systemPrompt}\n\n${languageInstruction}` }]
        });

        // Add the actual conversation history
        for (let msg of messages.slice(0, -1)) {
            chatHistory.push({
                role: msg.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: msg.content }]
            });
        }

        const chat = model.startChat({
            history: chatHistory,
            generationConfig: {
                maxOutputTokens: 400,
            },
        });

        const result = await chat.sendMessageStream(messages[messages.length - 1].content);

        const stream = new ReadableStream({
            async start(controller) {
                const encoder = new TextEncoder();
                try {
                    for await (const chunk of result.stream) {
                        const chunkText = chunk.text();
                        if (chunkText) {
                            controller.enqueue(encoder.encode(chunkText));
                        }
                    }
                } catch (e) {
                    console.error("Error in stream:", e);
                    controller.error(e);
                } finally {
                    controller.close();
                }
            }
        });

        return new NextResponse(stream);
    } catch (error) {
        console.error("Error in POST handler:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
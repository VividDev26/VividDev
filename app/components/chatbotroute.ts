import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
 
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
 
export async function POST(request: Request) {
  try {
    const { messages, systemPrompt } = await request.json();
 
    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 500,
      system: systemPrompt,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      })),
    });
 
    const reply = response.content[0].type === "text" ? response.content[0].text : "";
 
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Failed to get response" }, { status: 500 });
  }
}

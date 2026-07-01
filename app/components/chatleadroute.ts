import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import nodemailer from "nodemailer";
 
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
 
export async function POST(request: Request) {
  try {
    const { name, email, messages } = await request.json();
 
    // Generate JSON summary from conversation
    const summaryResponse = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      system: `You are a lead qualification assistant. Analyze the conversation and extract a structured JSON summary. 
      Return ONLY valid JSON, no markdown, no explanation. Use this exact structure:
      {
        "client": {
          "name": "",
          "email": ""
        },
        "project": {
          "type": "",
          "business_description": "",
          "budget_range": "",
          "timeline": "",
          "features_needed": [],
          "has_existing_site": false,
          "has_branding": false
        },
        "qualification": {
          "is_decision_maker": true,
          "ready_to_start": true,
          "urgency": "low|medium|high"
        },
        "recommended_tier": "",
        "conversation_summary": ""
      }`,
      messages: [
        {
          role: "user",
          content: `Client name: ${name}\nClient email: ${email}\n\nConversation:\n${messages.map((m: { role: string; content: string }) => `${m.role}: ${m.content}`).join("\n")}`,
        },
      ],
    });
 
    const jsonText = summaryResponse.content[0].type === "text" ? summaryResponse.content[0].text : "{}";
    
    let leadData: Record<string, unknown> = {};
    try {
      leadData = JSON.parse(jsonText);
      leadData.client = { ...(leadData.client as Record<string, unknown> || {}), name, email };
    } catch {
      leadData = { client: { name, email }, raw_summary: jsonText };
    }
 
    // Send email with JSON summary
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });
 
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `🤖 New Chatbot Lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1A1540;">
          <h2>New Lead from VividDev Chatbot</h2>
          <hr style="border: 0.5px solid #D8D6EE; margin-bottom: 20px;" />
          
          <h3>Client</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          
          <h3>Project Summary</h3>
          <p><strong>Type:</strong> ${(leadData.project as Record<string, unknown>)?.type || "Unknown"}</p>
          <p><strong>Business:</strong> ${(leadData.project as Record<string, unknown>)?.business_description || "Unknown"}</p>
          <p><strong>Budget:</strong> ${(leadData.project as Record<string, unknown>)?.budget_range || "Unknown"}</p>
          <p><strong>Timeline:</strong> ${(leadData.project as Record<string, unknown>)?.timeline || "Unknown"}</p>
          <p><strong>Recommended tier:</strong> ${leadData.recommended_tier || "Unknown"}</p>
          <p><strong>Urgency:</strong> ${(leadData.qualification as Record<string, unknown>)?.urgency || "Unknown"}</p>
          
          <h3>Summary</h3>
          <p style="background: #F0EFF8; padding: 15px; border-radius: 8px;">${leadData.conversation_summary || "See full JSON below"}</p>
          
          <h3>Full JSON</h3>
          <pre style="background: #1A1540; color: #E8E4FF; padding: 16px; border-radius: 8px; overflow: auto; font-size: 12px;">${JSON.stringify(leadData, null, 2)}</pre>
          
          <h3>Full Conversation</h3>
          <div style="background: #F0EFF8; padding: 15px; border-radius: 8px;">
            ${messages.map((m: { role: string; content: string }) => `
              <p><strong>${m.role === "assistant" ? "Vivid 🤖" : name + " 👤"}:</strong><br/>${m.content}</p>
            `).join("<hr style='border:0.5px solid #D8D6EE;'/>")}
          </div>
        </div>
      `,
    });
 
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Chat lead error:", error);
    return NextResponse.json({ error: "Failed to process lead" }, { status: 500 });
  }
}
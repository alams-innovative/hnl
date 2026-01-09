import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"
import { verifyCaptcha } from "@/lib/captcha"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      captchaToken,
      sessionId,
      language,
      userName,
      userEmail,
      conversationHistory,
      feedbackRating,
      feedbackEmailRequested,
      endedAt,
    } = body

    console.log("[v0] Chatbot submission received:", {
      sessionId,
      language,
      totalMessages: Array.isArray(conversationHistory) ? conversationHistory.length : undefined,
    })

    const captchaValid = await verifyCaptcha(captchaToken)
    if (!captchaValid) {
      console.error("[v0] Invalid captcha for chatbot submission")
      return NextResponse.json({ error: "Invalid captcha" }, { status: 400 })
    }

    if (!sessionId || typeof sessionId !== "string") {
      return NextResponse.json({ error: "Missing sessionId" }, { status: 400 })
    }
    if (!language || typeof language !== "string") {
      return NextResponse.json({ error: "Missing language" }, { status: 400 })
    }

    // Accept either a JSON string or an array/object and store as JSON string in DB
    const messages =
      typeof conversationHistory === "string"
        ? conversationHistory
        : JSON.stringify(conversationHistory ?? [])

    let messageArray: any[] = []
    try {
      messageArray = messages ? JSON.parse(messages) : []
    } catch {
      messageArray = []
    }
    const totalMessages = Array.isArray(messageArray) ? messageArray.length : 0

    // Check if conversation already exists
    const existing = await sql`
      SELECT id FROM chatbot_conversations WHERE session_id = ${sessionId}
    `

    if (existing.length > 0) {
      console.log("[v0] Updating existing conversation:", sessionId)
      await sql`
        UPDATE chatbot_conversations
        SET messages = ${messages},
            feedback_rating = ${feedbackRating ? Number(feedbackRating) : null},
            feedback_email_requested = ${Boolean(feedbackEmailRequested)},
            ended_at = ${endedAt || null},
            total_messages = ${totalMessages}
        WHERE session_id = ${sessionId}
      `
    } else {
      console.log("[v0] Creating new conversation:", sessionId)
      await sql`
        INSERT INTO chatbot_conversations (
          session_id, language, user_name, user_email, messages,
          total_messages, feedback_rating, feedback_email_requested, ended_at
        ) VALUES (
          ${sessionId}, ${language}, ${userName || null}, ${userEmail || null}, ${messages},
          ${totalMessages}, ${feedbackRating ? Number(feedbackRating) : null}, ${Boolean(feedbackEmailRequested)}, ${
            endedAt || null
          }
        )
      `
    }

    console.log("[v0] Chatbot conversation saved successfully")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Chatbot submission error:", error)
    return NextResponse.json(
      {
        error: "Submission failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

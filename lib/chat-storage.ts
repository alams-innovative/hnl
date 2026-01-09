"use client"

// Shared chat storage key for syncing between floating widget and dedicated page
const CHAT_STORAGE_KEY = "hnl-ai-chat-state"

export interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  tags?: string[]
}

export interface ChatState {
  messages: ChatMessage[]
  selectedLanguage: string | null
  userName: string
  userEmail: string
  userCompany: string
  step: "language" | "info" | "chat" | "feedback"
  sessionId: string
  feedbackRating: number | null
  feedbackEmailRequested: boolean
}

export const defaultChatState: ChatState = {
  messages: [],
  selectedLanguage: null,
  userName: "",
  userEmail: "",
  userCompany: "",
  step: "language",
  sessionId: "",
  feedbackRating: null,
  feedbackEmailRequested: false,
}

// Generate a unique session ID
export function generateSessionId(): string {
  return `hnl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

// Save chat state to localStorage
export function saveChatState(state: ChatState): void {
  if (typeof window === "undefined") return
  try {
    const serialized = JSON.stringify({
      ...state,
      messages: state.messages.map((m) => ({
        ...m,
        timestamp: m.timestamp instanceof Date ? m.timestamp.toISOString() : m.timestamp,
      })),
    })
    localStorage.setItem(CHAT_STORAGE_KEY, serialized)
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent("hnl-chat-update", { detail: state }))
  } catch (e) {
    console.error("Failed to save chat state:", e)
  }
}

// Load chat state from localStorage
export function loadChatState(): ChatState | null {
  if (typeof window === "undefined") return null
  try {
    const serialized = localStorage.getItem(CHAT_STORAGE_KEY)
    if (!serialized) return null
    const parsed = JSON.parse(serialized)
    return {
      ...parsed,
      messages: parsed.messages.map((m: ChatMessage & { timestamp: string }) => ({
        ...m,
        timestamp: new Date(m.timestamp),
      })),
    }
  } catch (e) {
    console.error("Failed to load chat state:", e)
    return null
  }
}

// Clear chat state (for new conversation)
export function clearChatState(): void {
  if (typeof window === "undefined") return
  try {
    localStorage.removeItem(CHAT_STORAGE_KEY)
    window.dispatchEvent(new CustomEvent("hnl-chat-update", { detail: null }))
  } catch (e) {
    console.error("Failed to clear chat state:", e)
  }
}

// Subscribe to chat updates from other components
export function subscribeToChatUpdates(callback: (state: ChatState | null) => void): () => void {
  if (typeof window === "undefined") return () => {}

  const handler = (event: CustomEvent<ChatState | null>) => {
    callback(event.detail)
  }

  window.addEventListener("hnl-chat-update" as keyof WindowEventMap, handler as EventListener)

  return () => {
    window.removeEventListener("hnl-chat-update" as keyof WindowEventMap, handler as EventListener)
  }
}

"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import {
  MessageCircle,
  X,
  Send,
  Loader2,
  Bot,
  User,
  Volume2,
  VolumeX,
  Download,
  Star,
  Mail,
  Maximize2,
  Minimize2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { getWhatsAppLink } from "@/lib/whatsapp"
import type { ChatMessage } from "@/lib/chat-storage"
import { getCaptchaToken } from "@/lib/captcha" // Assuming getCaptchaToken is defined in this file or imported

const languages = [
  { code: "en", name: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "ar", name: "العربية", flag: "🇸🇦", dir: "rtl" },
  { code: "ur", name: "اردو", flag: "🇵🇰", dir: "rtl" },
  { code: "zh", name: "中文", flag: "🇨🇳", dir: "ltr" },
  { code: "fr", name: "Français", flag: "🇫🇷", dir: "ltr" },
]

const translations: Record<
  string,
  {
    selectLanguage: string
    selectLanguageSubtitle: string
    collectInfo: string
    collectInfoSubtitle: string
    namePlaceholder: string
    emailPlaceholder: string
    continueBtn: string
    skipText: string
    privacyNote: string
    title: string
    subtitle: string
    welcomeMessage: string
    welcomeMessageWithName: string
    placeholder: string
    poweredBy: string
    downloadTitle: string
    feedbackTitle: string
    feedbackSubtitle: string
    feedbackEmailQuestion: string
    feedbackYes: string
    feedbackNo: string
    feedbackRateQuestion: string
    feedbackThankYou: string
    feedbackNewChat: string
    endChat: string
  }
> = {
  en: {
    selectLanguage: "Select Your Language",
    selectLanguageSubtitle: "Choose your preferred language to continue",
    collectInfo: "Let's get acquainted",
    collectInfoSubtitle: "So I can reach you if we lose connection",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    continueBtn: "Continue",
    skipText: "Continuing automatically in",
    privacyNote: "Your info is protected per our",
    title: "HNL-Ai",
    subtitle: "Knowledgeable AI Assistant",
    welcomeMessage:
      "Hello! I'm HNL-Ai, your knowledgeable assistant. How can I help you today? I can answer questions about our power solutions, telecom infrastructure, managed services, and provide direct links to relevant pages.",
    welcomeMessageWithName:
      "Hello {name}! I'm HNL-Ai, your knowledgeable assistant. How can I help you today? I can answer questions about our power solutions, telecom infrastructure, managed services, and provide direct links to relevant pages.",
    placeholder: "Type your message...",
    poweredBy: "Powered by",
    downloadTitle: "HNL-Ai Chat Log",
    feedbackTitle: "Thank you for chatting!",
    feedbackSubtitle: "Help us improve your experience",
    feedbackEmailQuestion: "Would you like to receive this conversation via email?",
    feedbackYes: "Yes, send it",
    feedbackNo: "No, thanks",
    feedbackRateQuestion: "How would you rate this conversation?",
    feedbackThankYou: "Thank you for your feedback!",
    feedbackNewChat: "Start New Conversation",
    endChat: "End Chat",
  },
  ar: {
    selectLanguage: "اختر لغتك",
    selectLanguageSubtitle: "اختر لغتك المفضلة للمتابعة",
    collectInfo: "دعنا نتعرف",
    collectInfoSubtitle: "حتى أتمكن من التواصل معك إذا انقطع الاتصال",
    namePlaceholder: "اسمك",
    emailPlaceholder: "بريدك الإلكتروني",
    continueBtn: "متابعة",
    skipText: "المتابعة تلقائياً خلال",
    privacyNote: "معلوماتك محمية وفقاً لـ",
    title: "HNL-Ai",
    subtitle: "مساعد ذكي متخصص",
    welcomeMessage: "مرحباً! أنا HNL-Ai، مساعدك المتخصص. كيف يمكنني مساعدتك اليوم؟",
    welcomeMessageWithName: "مرحباً {name}! أنا HNL-Ai، مساعدك المتخصص. كيف يمكنني مساعدتك اليوم؟",
    placeholder: "اكتب رسالتك...",
    poweredBy: "مدعوم من",
    downloadTitle: "سجل محادثة HNL-Ai",
    feedbackTitle: "شكراً للدردشة معنا!",
    feedbackSubtitle: "ساعدنا في تحسين تجربتك",
    feedbackEmailQuestion: "هل ترغب في استلام هذه المحادثة عبر البريد الإلكتروني؟",
    feedbackYes: "نعم، أرسلها",
    feedbackNo: "لا، شكراً",
    feedbackRateQuestion: "كيف تقيم هذه المحادثة؟",
    feedbackThankYou: "شكراً لملاحظاتك!",
    feedbackNewChat: "بدء محادثة جديدة",
    endChat: "إنهاء المحادثة",
  },
  ur: {
    selectLanguage: "اپنی زبان منتخب کریں",
    selectLanguageSubtitle: "جاری رکھنے کے لیے اپنی پسندیدہ زبان منتخب کریں",
    collectInfo: "آئیے تعارف کریں",
    collectInfoSubtitle: "تاکہ کنکشن ٹوٹنے پر میں آپ سے رابطہ کر سکوں",
    namePlaceholder: "آپ کا نام",
    emailPlaceholder: "آپ کی ای میل",
    continueBtn: "جاری رکھیں",
    skipText: "خودکار طور پر جاری",
    privacyNote: "آپ کی معلومات ہماری کے مطابق محفوظ ہیں",
    title: "HNL-Ai",
    subtitle: "ماہر AI اسسٹنٹ",
    welcomeMessage: "السلام علیکم! میں HNL-Ai ہوں، آپ کا ماہر اسسٹنٹ۔",
    welcomeMessageWithName: "السلام علیکم {name}! میں HNL-Ai ہوں، آپ کا ماہر اسسٹنٹ۔",
    placeholder: "اپنا پیغام لکھیں...",
    poweredBy: "تقویت یافتہ از",
    downloadTitle: "HNL-Ai چیٹ لاگ",
    feedbackTitle: "بات چیت کا شکریہ!",
    feedbackSubtitle: "اپنا تجربہ بہتر بنانے میں ہماری مدد کریں",
    feedbackEmailQuestion: "کیا آپ یہ گفتگو ای میل کے ذریعے حاصل کرنا چاہیں گے؟",
    feedbackYes: "ہاں، بھیجیں",
    feedbackNo: "نہیں، شکریہ",
    feedbackRateQuestion: "آپ اس گفتگو کو کیسے درجہ بندی کریں گے؟",
    feedbackThankYou: "آپ کی رائے کا شکریہ!",
    feedbackNewChat: "نئی گفتگو شروع کریں",
    endChat: "چیٹ ختم کریں",
  },
  zh: {
    selectLanguage: "选择您的语言",
    selectLanguageSubtitle: "选择您的首选语言继续",
    collectInfo: "让我们认识一下",
    collectInfoSubtitle: "以便在连接中断时联系您",
    namePlaceholder: "您的姓名",
    emailPlaceholder: "您的邮箱",
    continueBtn: "继续",
    skipText: "自动继续倒计时",
    privacyNote: "您的信息受我们的保护",
    title: "HNL-Ai",
    subtitle: "智能AI助手",
    welcomeMessage: "您好！我是HNL-Ai，您的智能助手。今天我能为您做什么？",
    welcomeMessageWithName: "您好 {name}！我是HNL-Ai，您的智能助手。今天我能为您做什么？",
    placeholder: "输入您的消息...",
    poweredBy: "技术支持",
    downloadTitle: "HNL-Ai聊天记录",
    feedbackTitle: "感谢您的对话！",
    feedbackSubtitle: "帮助我们改善您的体验",
    feedbackEmailQuestion: "您想通过电子邮件收到此对话吗？",
    feedbackYes: "是的，发送",
    feedbackNo: "不用，谢谢",
    feedbackRateQuestion: "您如何评价这次对话？",
    feedbackThankYou: "感谢您的反馈！",
    feedbackNewChat: "开始新对话",
    endChat: "结束聊天",
  },
  fr: {
    selectLanguage: "Choisissez votre langue",
    selectLanguageSubtitle: "Sélectionnez votre langue préférée pour continuer",
    collectInfo: "Faisons connaissance",
    collectInfoSubtitle: "Pour vous contacter en cas de déconnexion",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "Votre email",
    continueBtn: "Continuer",
    skipText: "Continuation automatique dans",
    privacyNote: "Vos informations sont protégées selon notre",
    title: "HNL-Ai",
    subtitle: "Assistant IA Expert",
    welcomeMessage: "Bonjour! Je suis HNL-Ai, votre assistant expert.",
    welcomeMessageWithName: "Bonjour {name}! Je suis HNL-Ai, votre assistant expert.",
    placeholder: "Tapez votre message...",
    poweredBy: "Propulsé par",
    downloadTitle: "Journal de chat HNL-Ai",
    feedbackTitle: "Merci pour cette conversation!",
    feedbackSubtitle: "Aidez-nous à améliorer votre expérience",
    feedbackEmailQuestion: "Souhaitez-vous recevoir cette conversation par email?",
    feedbackYes: "Oui, envoyez-la",
    feedbackNo: "Non, merci",
    feedbackRateQuestion: "Comment évaluez-vous cette conversation?",
    feedbackThankYou: "Merci pour vos commentaires!",
    feedbackNewChat: "Nouvelle conversation",
    endChat: "Terminer le chat",
  },
}

export function FloatingChatWidget() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [step, setStep] = useState<"language" | "info" | "chat" | "feedback">("language")
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userCompany, setUserCompany] = useState("")
  const [autoSkipCountdown, setAutoSkipCountdown] = useState(10)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [feedbackRating, setFeedbackRating] = useState(0)
  const [feedbackEmailRequested, setFeedbackEmailRequested] = useState(false)
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Session ID must change for each new conversation (DB has UNIQUE(session_id))
  const [sessionId, setSessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`)
  const [hasSavedConversation, setHasSavedConversation] = useState(false)

  const t = translations[selectedLanguage || "en"]
  const currentLang = languages.find((l) => l.code === selectedLanguage)
  const isRTL = currentLang?.dir === "rtl"

  useEffect(() => {
    if (isOpen && step === "chat") {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen, step])

  useEffect(() => {
    if (step === "info" && selectedLanguage) {
      const timer = setInterval(() => {
        setAutoSkipCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            setStep("chat")
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [step, selectedLanguage])

  useEffect(() => {
    audioRef.current = new Audio("/notification.mp3")
    audioRef.current.volume = 0.3
  }, [])

  const playSound = useCallback(() => {
    if (soundEnabled && audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(() => {})
    }
  }, [soundEnabled])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    if (!isLoading && step === "chat" && isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [messages, isLoading, step, isOpen])

  const handleLanguageSelect = (langCode: string) => {
    setSelectedLanguage(langCode)
    setStep("info")
    setAutoSkipCountdown(10)
  }

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Detect company from email
    if (userEmail && !userEmail.match(/@(gmail|hotmail|yahoo|outlook|live|icloud|aol)\./i)) {
      const domain = userEmail.split("@")[1]
      if (domain) {
        const companyName = domain.split(".")[0]
        setUserCompany(companyName.charAt(0).toUpperCase() + companyName.slice(1))
      }
    }
    setStep("chat")
  }

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: content.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/ai-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: content.trim(),
          language: selectedLanguage,
          userName,
          userCompany,
        }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let fullText = ""

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          fullText += decoder.decode(value, { stream: true })
        }
      }

      playSound()

      // Parse tags from the response
      const tagsMatch = fullText.match(/TAGS?:\s*(.+)$/m)
      let tags: string[] = []
      let messageContent = fullText

      if (tagsMatch) {
        messageContent = fullText.replace(/TAGS?:\s*(.+)$/m, "").trim()
        const tagLinks = tagsMatch[1].match(/\[([^\]]+)\]$$([^)]+)$$/g)
        if (tagLinks) {
          tags = tagLinks.map((tag) => {
            const match = tag.match(/\[([^\]]+)\]/)
            return match ? match[1] : tag
          })
        }
      }

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: messageContent,
        timestamp: new Date(),
        tags: tags.length > 0 ? tags : undefined,
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("[v0] Chat error:", error)
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I apologize, but I encountered an error. Please try again.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(inputValue)
  }

  const handleEndChat = () => {
    setStep("feedback")
  }

  const handleFeedbackSubmit = async () => {
    try {
      const captchaToken = await getCaptchaToken()
      if (!captchaToken) {
        console.error("[v0] Failed to get captcha token")
        return
      }

      const response = await fetch("/api/submissions/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          captchaToken,
          sessionId,
          language: selectedLanguage,
          userName,
          userEmail,
          conversationHistory: JSON.stringify(messages),
          feedbackRating,
          feedbackEmailRequested,
          endedAt: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        console.error("[v0] Chat save failed:", await response.text())
      } else {
        setHasSavedConversation(true)
      }
    } catch (error) {
      console.error("[v0] Save chat error:", error)
    }

    setFeedbackSubmitted(true)
  }

  const persistConversation = async (endedAt?: string | null) => {
    // Avoid spamming DB; only save once per session unless feedback submit happens.
    if (hasSavedConversation) return
    if (!sessionId || !selectedLanguage) return
    if (!messages || messages.length === 0) return

    try {
      const captchaToken = await getCaptchaToken()
      if (!captchaToken) return

      const response = await fetch("/api/submissions/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          captchaToken,
          sessionId,
          language: selectedLanguage,
          userName,
          userEmail,
          conversationHistory: JSON.stringify(messages),
          endedAt: endedAt || null,
        }),
      })

      if (response.ok) {
        setHasSavedConversation(true)
      }
    } catch (error) {
      console.error("[v0] Auto-save chat error:", error)
    }
  }

  const handleNewChat = () => {
    setMessages([])
    setSelectedLanguage("")
    setUserName("")
    setUserEmail("")
    setUserCompany("")
    setStep("language")
    setFeedbackRating(0)
    setFeedbackEmailRequested(false)
    setFeedbackSubmitted(false)
    setHasSavedConversation(false)
    setSessionId(`session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`)
  }

  const downloadChat = () => {
    const chatContent = messages
      .map((m) => `[${m.timestamp.toLocaleTimeString()}] ${m.role === "user" ? "You" : "HNL-Ai"}: ${m.content}`)
      .join("\n\n")

    const header = `${t.downloadTitle}\n${"=".repeat(40)}\nDate: ${new Date().toLocaleDateString()}\n${userName ? `Name: ${userName}\n` : ""}${userEmail ? `Email: ${userEmail}\n` : ""}${userCompany ? `Company: ${userCompany}\n` : ""}\n${"=".repeat(40)}\n\n`

    const blob = new Blob([header + chatContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `hnl-ai-chat-${new Date().toISOString().split("T")[0]}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  const renderMessageContent = (content: string) => {
    const parts: React.ReactNode[] = []
    let remaining = content
    let keyIndex = 0

    while (remaining.length > 0) {
      const linkStart = remaining.indexOf("[")
      const linkMid = remaining.indexOf("](")
      const linkEnd = remaining.indexOf(")", linkMid)

      const boldStart = remaining.indexOf("**")
      const boldEnd = boldStart > -1 ? remaining.indexOf("**", boldStart + 2) : -1

      const listMatch = remaining.match(/^(\d+)\.\s+(.+?)(?=\n|$)/)
      const bulletMatch = remaining.match(/^[•-]\s+(.+?)(?=\n|$)/)

      if (linkStart > -1 && linkMid > linkStart && linkEnd > linkMid) {
        if (linkStart > 0) {
          parts.push(<span key={keyIndex++}>{remaining.slice(0, linkStart)}</span>)
        }

        const linkText = remaining.slice(linkStart + 1, linkMid)
        const linkUrl = remaining.slice(linkMid + 2, linkEnd)

        if (linkUrl.startsWith("/")) {
          parts.push(
            <button
              key={keyIndex++}
              onClick={() => router.push(linkUrl)}
              className="text-red-600 hover:text-red-700 underline font-medium"
            >
              {linkText}
            </button>,
          )
        } else {
          parts.push(
            <a
              key={keyIndex++}
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 underline font-medium"
            >
              {linkText}
            </a>,
          )
        }

        remaining = remaining.slice(linkEnd + 1)
      } else if (boldStart > -1 && boldEnd > boldStart) {
        if (boldStart > 0) {
          parts.push(<span key={keyIndex++}>{remaining.slice(0, boldStart)}</span>)
        }

        const boldText = remaining.slice(boldStart + 2, boldEnd)
        parts.push(
          <strong key={keyIndex++} className="font-semibold text-gray-900">
            {boldText}
          </strong>,
        )

        remaining = remaining.slice(boldEnd + 2)
      } else if (listMatch && remaining.indexOf(listMatch[0]) === 0) {
        parts.push(
          <div key={keyIndex++} className="flex gap-2 my-1">
            <span className="text-red-600 font-semibold min-w-[20px]">{listMatch[1]}.</span>
            <span>{listMatch[2]}</span>
          </div>,
        )
        remaining = remaining.slice(listMatch[0].length).replace(/^\n/, "")
      } else if (bulletMatch && remaining.indexOf(bulletMatch[0]) === 0) {
        parts.push(
          <div key={keyIndex++} className="flex gap-2 my-1">
            <span className="text-red-600">•</span>
            <span>{bulletMatch[1]}</span>
          </div>,
        )
        remaining = remaining.slice(bulletMatch[0].length).replace(/^\n/, "")
      } else {
        const nextSpecial = Math.min(
          linkStart > -1 ? linkStart : remaining.length,
          boldStart > -1 ? boldStart : remaining.length,
        )

        if (nextSpecial > 0) {
          parts.push(<span key={keyIndex++}>{remaining.slice(0, nextSpecial)}</span>)
          remaining = remaining.slice(nextSpecial)
        } else {
          parts.push(<span key={keyIndex++}>{remaining}</span>)
          remaining = ""
        }
      }
    }

    return parts
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Open chat"
      >
        <Bot className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed z-50 bg-white shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
            isExpanded
              ? "inset-x-0 top-[80px] bottom-0 rounded-none mx-auto max-w-[1920px]"
              : "bottom-6 right-6 w-[380px] h-[500px] rounded-2xl"
          }`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">{t.title}</h3>
              <p className="text-red-100 text-xs">{t.subtitle}</p>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 hover:bg-white/20 rounded transition-colors"
                title={isExpanded ? "Minimize" : "Expand"}
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => {
                  // If user closes mid-chat, persist what we have so it shows in admin dashboard.
                  void persistConversation(null)
                  setIsOpen(false)
                  setIsExpanded(false)
                }}
                className="p-1.5 hover:bg-white/20 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Language Selection */}
          {step === "language" && (
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="text-center">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{translations.en.selectLanguage}</h3>
                <p className="text-gray-600 text-xs mb-4">{translations.en.selectLanguageSubtitle}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className="px-3 py-1.5 rounded-full border-2 border-gray-200 hover:border-red-500 hover:bg-red-50 transition-all text-sm font-medium flex items-center gap-1.5"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Info Collection */}
          {step === "info" && (
            <div className="flex-1 flex items-center justify-center p-6">
              <form onSubmit={handleInfoSubmit} className="w-full max-w-xs">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">{t.collectInfo}</h3>
                <p className="text-gray-600 text-xs mb-4 text-center">{t.collectInfoSubtitle}</p>

                <div className="space-y-2 mb-3">
                  <Input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder={t.namePlaceholder}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                  />
                  <Input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder={t.emailPlaceholder}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-medium mb-2"
                >
                  {t.continueBtn}
                </Button>

                <p className="text-center text-xs text-gray-500 mb-1">
                  {t.skipText} {autoSkipCountdown}s
                </p>

                <p className="text-center text-xs text-gray-500">
                  {t.privacyNote}{" "}
                  <Link href="/privacy-policy" className="text-red-600 hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </div>
          )}

          {/* Chat Interface */}
          {step === "chat" && (
            <>
              {/* Toolbar */}
              <div className="flex items-center justify-between px-3 py-1.5 border-b bg-gray-50 text-xs">
                <div className="flex items-center gap-1 text-gray-600">
                  <MessageCircle className="w-3 h-3" />
                  <span>{currentLang?.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="p-1 h-auto hover:bg-gray-200 rounded transition-colors"
                  >
                    {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={downloadChat}
                    className="p-1 h-auto hover:bg-gray-200 rounded transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleEndChat}
                    className="px-2 py-0.5 h-auto text-xs bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                  >
                    {t.endChat}
                  </Button>
                </div>
              </div>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {/* Welcome message */}
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="bg-gray-100 rounded-xl rounded-tl-md p-2.5 text-xs text-gray-800 max-w-[85%]">
                    {userName ? t.welcomeMessageWithName.replace("{name}", userName) : t.welcomeMessage}
                  </div>
                </div>

                {messages.map((message) => (
                  <div key={message.id} className={`flex gap-2 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === "user" ? "bg-gray-200" : "bg-red-100"
                      }`}
                    >
                      {message.role === "user" ? (
                        <User className="w-4 h-4 text-gray-600" />
                      ) : (
                        <Bot className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                    <div className={`max-w-[85%] ${message.role === "user" ? "text-right" : ""}`}>
                      <div
                        className={`inline-block rounded-xl p-2.5 text-xs ${
                          message.role === "user"
                            ? "bg-red-600 text-white rounded-tr-md"
                            : "bg-gray-100 text-gray-800 rounded-tl-md"
                        }`}
                      >
                        {message.role === "assistant" ? renderMessageContent(message.content) : message.content}
                      </div>
                      {message.role === "assistant" && message.tags && message.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {message.tags.map((tag, idx) => (
                            <Button
                              key={idx}
                              onClick={() => sendMessage(tag)}
                              className="px-2 py-0.5 text-xs bg-white border border-gray-300 rounded-full hover:border-red-500 hover:text-red-600 transition-colors"
                            >
                              {tag}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-red-600" />
                    </div>
                    <div className="bg-gray-100 rounded-xl rounded-tl-md p-2.5">
                      <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-2 border-t bg-white">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={t.placeholder}
                    disabled={isLoading}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-xs disabled:opacity-50"
                  />
                  <Button
                    type="submit"
                    disabled={!inputValue.trim() || isLoading}
                    className="bg-red-600 hover:bg-red-700 text-white rounded-full p-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <div className="text-center mt-2 text-[10px] text-gray-400">
                  {t.poweredBy}{" "}
                  <a
                    href="https://wab2c.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-600 hover:underline"
                  >
                    WAB2C.com
                  </a>
                </div>
              </form>
            </>
          )}

          {/* Feedback */}
          {step === "feedback" && (
            <div className="flex-1 flex items-center justify-center p-6">
              {feedbackSubmitted ? (
                <div className="text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t.feedbackThankYou}</h3>
                  <Button
                    onClick={handleNewChat}
                    className="mt-3 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    {t.feedbackNewChat}
                  </Button>
                </div>
              ) : (
                <div className="w-full max-w-xs text-center">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{t.feedbackTitle}</h3>
                  <p className="text-gray-600 text-xs mb-4">{t.feedbackSubtitle}</p>

                  {userEmail && (
                    <div className="mb-4">
                      <p className="text-xs text-gray-700 mb-2">{t.feedbackEmailQuestion}</p>
                      <div className="flex justify-center gap-2">
                        <Button
                          onClick={() => setFeedbackEmailRequested(true)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                            feedbackEmailRequested === true
                              ? "bg-red-600 text-white"
                              : "border border-gray-300 hover:border-red-500"
                          }`}
                        >
                          <Mail className="w-3 h-3 inline mr-1" />
                          {t.feedbackYes}
                        </Button>
                        <Button
                          onClick={() => setFeedbackEmailRequested(false)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                            feedbackEmailRequested === false
                              ? "bg-gray-600 text-white"
                              : "border border-gray-300 hover:border-gray-500"
                          }`}
                        >
                          {t.feedbackNo}
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <p className="text-xs text-gray-700 mb-2">{t.feedbackRateQuestion}</p>
                    <div className="flex justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Button
                          key={star}
                          onClick={() => setFeedbackRating(star)}
                          className="p-0.5 transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-7 h-7 ${
                              feedbackRating && star <= feedbackRating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={handleFeedbackSubmit}
                    disabled={feedbackRating === 0}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-medium disabled:opacity-50"
                  >
                    {t.continueBtn}
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={getWhatsAppLink({ action: "General", page: "Chat Widget" })}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 ${
          isOpen ? "right-6 bottom-[calc(1.5rem+500px+0.5rem)]" : "right-24"
        }`}
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  )
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import { useChatStore } from "@/stores/chatStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, X, Send, Bot, User, Trash2, BotMessageSquare } from "lucide-react";

const ChatBot = () => {
  const { isOpen, messages, isLoading, toggleChat, addMessage, setLoading, clearMessages } = useChatStore();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    addMessage({ role: "user", content: userMessage });

    setLoading(true);

    try {
      // Format history for API (only last 10 messages for context)
      const recentHistory = messages.slice(-10).map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const response = await fetch(`/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          history: recentHistory,
        }),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      addMessage({ role: "assistant", content: data.message });
    } catch (error) {
      console.error("Error sending message:", error);
      addMessage({
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={toggleChat}
              size="icon-lg"
              className="rounded-full shadow-lg hover:shadow-xl transition-shadow bg-primary hover:bg-primary/90"
              aria-label="Open chat"
            >
              {/* <MessageCircle className="size-6" /> */}
              <BotMessageSquare className="size-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col h-dvh max-h-dvh w-screen rounded-none overflow-hidden border border-border/60 bg-background/95 backdrop-blur-md shadow-2xl dark:bg-background/90 sm:bottom-6 sm:right-6 sm:inset-auto sm:w-[90vw] sm:max-w-md sm:h-[600px] sm:max-h-[80vh] sm:rounded-2xl"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/60 bg-background/80">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">AI Assistant</h3>
                  <p className="text-xs text-muted-foreground">Powered by Gemini</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {messages.length > 0 && (
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={clearMessages}
                    aria-label="Clear chat"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Trash2 className="size-4" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={toggleChat}
                  aria-label="Close chat"
                >
                  <X className="size-4" />
                </Button>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                  <Bot className="size-12 text-muted-foreground/50 mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Hi! Im your AI assistant. Ask anything about Michael.
                  </p>
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" && (
                      <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Bot className="size-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                        }`}
                    >
                      <p className="text-sm whitespace-pre-wrap wrap-break-word">{message.content}</p>
                    </div>
                    {message.role === "user" && (
                      <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <User className="size-4 text-primary" />
                      </div>
                    )}
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Bot className="size-4 text-primary" />
                  </div>
                  <div className="bg-muted rounded-2xl px-4 py-2.5">
                    <div className="flex gap-1">
                      <div className="size-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="size-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="size-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border/60 bg-background/80">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Projects, Awards, etc..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  size="icon"
                  className="shrink-0"
                  aria-label="Send message"
                >
                  <Send className="size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;


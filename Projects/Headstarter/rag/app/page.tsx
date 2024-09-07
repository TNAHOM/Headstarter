"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Loader } from "lucide-react";

export default function FuturisticChat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I'm the Rate My Professor support assistant. How can I help you today?",
    },
  ]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setIsLoading(true);
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: message },
      { role: "assistant", content: "" },
    ]);
    setMessage(""); // Clear the input field

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([
          ...messages,
          {
            role: "user",
            content: message,
          },
        ]),
      });

      if (response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let result = "";

        const processText = async ({ done, value }) => {
          if (done) {
            setIsLoading(false);
            return result;
          }
          const text = decoder.decode(value || new Uint8Array(), {
            stream: true,
          });
          result += text;
          setMessages((prevMessages) => {
            const lastMessage = prevMessages[prevMessages.length - 1];
            const otherMessages = prevMessages.slice(
              0,
              prevMessages.length - 1
            );
            return [
              ...otherMessages,
              { ...lastMessage, content: lastMessage.content + text },
            ];
          });
          const { done: readerDone, value: readerValue } = await reader.read();
          return processText({ done: readerDone, value: readerValue });
        };

        await reader.read().then(processText);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setIsLoading(false);
      // Handle the error gracefully, e.g., show an error message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-black p-4">
      <div className="w-full max-w-4xl bg-black bg-opacity-50 rounded-2xl overflow-hidden backdrop-filter backdrop-blur-lg border border-purple-500 shadow-2xl">
        <div className="p-6 space-y-4">
          <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Intergalactic Professor Rater
          </h1>
          <div className="h-[60vh] overflow-y-auto space-y-4 p-4">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] p-4 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white"
                      : "bg-gradient-to-r from-purple-600 to-pink-400 text-white"
                  }`}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow p-3 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Ask about a professor..."
            />
            <button
              onClick={sendMessage}
              disabled={isLoading}
              className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
            >
              {isLoading ? <Loader className="animate-spin" /> : <Send />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

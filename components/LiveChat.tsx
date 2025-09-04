"use client"

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Phone, Mail } from 'lucide-react'

interface ChatMessage {
  id: string
  text: string
  sender: 'user' | 'agent'
  timestamp: Date
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hi! I\'m here to help you with your content strategy. How can I assist you today?',
      sender: 'agent',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate agent response
    setTimeout(() => {
      const agentMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: 'Thanks for your message! I\'ll connect you with one of our content strategy experts. Would you like to schedule a free consultation call?',
        sender: 'agent',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, agentMessage])
      setIsTyping(false)
    }, 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickActions = [
    { text: 'Book Strategy Call', action: () => handleQuickAction('Book Strategy Call') },
    { text: 'Get Quote', action: () => handleQuickAction('Get Quote') },
    { text: 'View Portfolio', action: () => handleQuickAction('View Portfolio') },
    { text: 'Download Guide', action: () => handleQuickAction('Download Guide') }
  ]

  const handleQuickAction = (action: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: action,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    // Simulate agent response based on action
    setTimeout(() => {
      let response = ''
      switch (action) {
        case 'Book Strategy Call':
          response = 'Great choice! I\'ll redirect you to our calendar to book your free 30-minute strategy call. What\'s the best time for you?'
          break
        case 'Get Quote':
          response = 'I\'d be happy to help you get a quote! Could you tell me a bit about your project and budget range?'
          break
        case 'View Portfolio':
          response = 'Absolutely! I\'ll show you some of our best work. You can also scroll down to see our portfolio section with detailed case studies.'
          break
        case 'Download Guide':
          response = 'Perfect! I\'ll send you our free content strategy guide. Just let me know your email address and I\'ll get that right to you.'
          break
        default:
          response = 'Thanks for your interest! How can I help you further?'
      }

      const agentMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'agent',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, agentMessage])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-royal-600 hover:bg-royal-700 shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[90vw]"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="bg-royal-600 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="font-semibold">INSYNC Support</h3>
                    <p className="text-sm text-royal-100">Online • Usually responds instantly</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-white hover:bg-royal-700 p-1"
                  >
                    {isMinimized ? '□' : '−'}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-royal-700 p-1"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Chat Body */}
              <AnimatePresence>
                {!isMinimized && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-96 flex flex-col">
                      {/* Messages */}
                      <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message) => (
                          <motion.div
                            key={message.id}
                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div
                              className={`max-w-xs px-4 py-2 rounded-lg ${
                                message.sender === 'user'
                                  ? 'bg-royal-600 text-white'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              <p className="text-sm">{message.text}</p>
                              <p className={`text-xs mt-1 ${
                                message.sender === 'user' ? 'text-royal-100' : 'text-gray-500'
                              }`}>
                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                        
                        {isTyping && (
                          <motion.div
                            className="flex justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        
                        <div ref={messagesEndRef} />
                      </div>

                      {/* Quick Actions */}
                      {messages.length === 1 && (
                        <div className="px-4 pb-3">
                          <p className="text-xs text-gray-500 mb-2">Quick actions:</p>
                          <div className="flex flex-wrap gap-2">
                            {quickActions.map((action, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                onClick={action.action}
                                className="text-xs h-8 px-3"
                              >
                                {action.text}
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Input */}
                      <div className="p-4 border-t border-gray-200">
                        <div className="flex space-x-2">
                          <Input
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                            className="flex-1"
                          />
                          <Button
                            onClick={handleSendMessage}
                            disabled={!inputText.trim()}
                            size="sm"
                            className="bg-royal-600 hover:bg-royal-700"
                          >
                            <Send className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

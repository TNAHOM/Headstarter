'use client'

import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hi, I'm the Headstarter Customer Support. How can I assist you?`
    }
  ]);
  const [message, setMessage] = useState('');
  const [language, setLanguage] = useState('en');

  const sendMessages = () => {
    setMessage('')
    setMessages((messages) => [
      ...messages,
      { role: 'user', content: message },
      { role: 'assistant', content: '' }
    ])
    const response = fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: [...messages, { role: 'user', content: message }],
        language: language
      }),
    }).then(async (res) => {
      const reader = res.body.getReader()
      const decoder = new TextDecoder();

      let result = ''
      return reader.read().then(function processText({ done, value }) {
        if (done) {
          return result
        }
        const text = decoder.decode(value || new Int8Array(), { stream: true })
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1]
          let otherMessages = messages.slice(0, messages.length - 1)
          return [
            ...otherMessages,
            {
              ...lastMessage,
              content: lastMessage.content + text
            },
          ]
        })
        return reader.read().then(processText)
      })
    })
  }

  return (
    <div className='h-[100vh] bg-[#202020] '>
      <div className='w-[100vw] flex flex-col items-center '>
        <h2 className='text-[#51DA4C] font-bold text-5xl mt-11 mb-6'>Headstarter Customer Support</h2>
        <div className='flex flex-col justify-between border w-4/6 h-[600px] p-3 overflow-y-scroll'>
          <div className='w-full flex flex-col items-center '>
            {messages.map((message, index) => {
              const alignment = message.role === 'assistant' ? 'flex-start' : 'flex-end';
              const bgColor = message.role === 'assistant' ? 'bg-red-500' : 'bg-[#8c5ad3]';

              return (
                <div
                  key={index}
                  className={`${bgColor} text-white rounded border-3 px-4 py-2 mb-2 `}
                  style={{ alignSelf: alignment }}
                >
                  {message.content}
                </div>
              );
            })}
          </div>
        </div>
        <div className='mt-4 w-1/2'>
          <div className="flex gap-2 w-[100%]">
            <input
              className="w-[100%] rounded border px-3 py-3"
              type='text'
              placeholder='Ask question'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className='rounded px-3 text-white bg-[#277624]' onClick={sendMessages}>Send</button>
            <div className='flex'>
              <select
                name='language'
                id='language'
                className='p-3'
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value='en' className='p-3 text-lg'>English</option>
                <option value='es' className='p-3'>Spanish</option>
                <option value='fr' className='p-3'>French</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
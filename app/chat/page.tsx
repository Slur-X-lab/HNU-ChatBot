'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './Chat.module.css'

export default function Chat() {
  const [inputValue, setInputValue] = useState('')
  const [selectedModel, setSelectedModel] = useState('Sonnet 4.6')
  const [showDropdown, setShowDropdown] = useState(false)

  const getCurrentGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    return 'Good evening'
  }

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      console.log('Sending message:', inputValue)
      setInputValue('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const actionButtons = ['Write', 'Learn', 'Code', 'Life stuff', "Claude's choice"]

  return (
    <>
      <Navbar />
      <main className={styles.chatContainer}>
        <div className={styles.chatContent}>
          <div className={styles.headerSection}>
            <h1 className={styles.greeting}>
              {getCurrentGreeting()}, Joshua
            </h1>
          </div>

          <div className={styles.inputSection}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="How can I help you today?"
                className={styles.chatInput}
              />
              <button className={styles.attachButton}>
                +
              </button>
            </div>

            <div className={styles.modelSection}>
              <div className={styles.modelSelector}>
                <button 
                  className={styles.modelButton}
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  {selectedModel}
                  <svg className={styles.dropdownIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showDropdown && (
                  <div className={styles.dropdownMenu}>
                    <button className={styles.dropdownItem}>Sonnet 4.6</button>
                    <button className={styles.dropdownItem}>Sonnet 4.5</button>
                    <button className={styles.dropdownItem}>Haiku 3.5</button>
                  </div>
                )}
              </div>
              <div className={styles.soundWave}>
                <div className={styles.waveBar}></div>
                <div className={styles.waveBar}></div>
                <div className={styles.waveBar}></div>
                <div className={styles.waveBar}></div>
                <div className={styles.waveBar}></div>
              </div>
            </div>
          </div>

          <div className={styles.actionButtons}>
            {actionButtons.map((button) => (
              <button key={button} className={styles.actionButton}>
                {button}
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

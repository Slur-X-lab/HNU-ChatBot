'use client'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import About from '@/components/About'
import Footer from '@/components/Footer'
import ScrollAnimationProvider from '@/components/ScrollAnimationProvider'

export default function Home() {
  useEffect(() => {
    // Handle hash scrolling when page loads
    const hash = window.location.hash.slice(1)
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return (
    <>
      <Navbar />
      <ScrollAnimationProvider />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <About />
      </main>
      <Footer />
    </>
  )
}

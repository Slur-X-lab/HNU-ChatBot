import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import About from '@/components/About'
import Footer from '@/components/Footer'
import ScrollAnimationProvider from '@/components/ScrollAnimationProvider'

export default function Home() {
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

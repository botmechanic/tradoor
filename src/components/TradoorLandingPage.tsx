'use client'

import * as React from 'react'
import { GiShirt, GiThumbUp, GiNeckBite } from 'react-icons/gi'
import { FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa'

interface TraitCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const TraitCard = ({ icon, title, description }: TraitCardProps) => (
  <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
)

export default function TradoorLandingPage() {
  return (
    <div className="min-h-screen bg-blue-500 text-white font-comic-sans">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <img
            src="/images/tradoor-caricature.png"
            alt="Tradoor Caricature"
            className="mx-auto w-64 h-64 rounded-full border-4 border-yellow-400"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Meet Tradoor, the Ultimate Counter-Indicator</h1>
        <p className="text-xl md:text-2xl mb-8">If Tradoor buys, you better start selling.</p>
        <button 
          type="button"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full text-xl transform transition duration-300 hover:scale-105 hover:rotate-3"
        >
          Join the Madness – Buy $NECK Now!
        </button>
      </section>

      {/* About Section */}
      <section className="bg-white text-blue-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Legend of Tradoor</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Meet Tradoor, the degen trader with a neck longer than his trading track record. Legend has it that he's been trading since the days of Mt. Gox, but nobody knows if he's ever made a single profitable trade. In fact, every time he buys, the market dumps, and every time he sells, it pumps. He's the ultimate counter-indicator; entire trading bots are coded to do the exact opposite of what he does!
          </p>
        </div>
      </section>

      {/* Tradoor's Signature Traits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Tradoor's Signature Traits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TraitCard 
              icon={<GiShirt size={48} className="text-yellow-400" />} 
              title="Hawaiian Shirt of Doom" 
              description="A colorful shirt that predicts market crashes" 
            />
            <TraitCard 
              icon={<GiThumbUp size={48} className="text-yellow-400" />} 
              title="OK Sign of Desperation" 
              description="The more OK he is, the worse it gets" 
            />
            <TraitCard 
              icon={<GiNeckBite size={48} className="text-yellow-400" />} 
              title="Neck of Eternal FOMO" 
              description="Always stretching to catch the next pump" 
            />
          </div>
        </div>
      </section>

      {/* Meme Showcase */}
      <section className="bg-yellow-400 text-blue-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Meme That Started It All</h2>
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto mb-8">
            <img 
              src="/images/tradoor-meme.png" 
              alt="Tradoor Meme" 
              className="w-full h-auto" 
            />
            <p className="text-xl font-bold mt-4">When Tradoor buys the dip...</p>
            <p className="text-xl font-bold">...but the dip keeps dipping.</p>
          </div>
          <button 
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Share Tradoor's Dip Dipping Moment!
          </button>
        </div>
      </section>

      {/* Backstory & Community */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Tradoor's Tragic Backstory</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Tradoor became a meme on Crypto Twitter when he publicly announced his "all-in" position on $LUNA, right before it went to zero. Since then, he's become the crypto mascot for everything not to do in trading. People love him for his absurd optimism, even when he's down 99%. He's the ultimate anti-hero—everyone knows he's doomed, but they can't help but root for him anyway.
          </p>
          <div className="text-center">
            <button 
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-xl"
            >
              Join the Tradoor Fan Club – Follow the FOMO!
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
  <div className="container mx-auto px-4">
    <p className="text-sm mb-4 text-center">
      Disclaimer: $NECK is a memecoin with no intrinsic value. Buy at your own risk. Tradoor definitely wouldn't advise it, but he's buying anyway.
    </p>
    <div className="flex justify-center space-x-4">
      <a href="https://x.com/TradoorMeme" className="text-white hover:text-yellow-400" aria-label="Twitter">
        <FaTwitter className="w-6 h-16" />
      </a>
      <a href="https://t.me/+ZEm9wvmvuXE2MjQx" className="text-white hover:text-yellow-400" aria-label="Telegram">
        <FaTelegram className="w-6 h-16" />
      </a>
    </div>
  </div>
</footer>
    </div>
  )
}
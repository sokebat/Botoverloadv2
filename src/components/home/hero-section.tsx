"use client";

import { motion } from "framer-motion";

import { Bot, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative  min-h-screen flex items-center justify-center py-16 2xl:pb-20 2xl:pt-28 2xl:min-h-auto ">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-2 md:px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20">
            <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">
              AI-Powered Social Automation
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-violet-500 bg-clip-text text-transparent">
            Revolutionize Your Automation
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your business with AI-powered social automation.
            BotOverload seamlessly connects and manages all your platforms,
            making digital productivity effortless.
          </p>

          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Bot className="w-4 h-4 mr-1 text-purple-400" />
              <span>AI-Powered</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-700" />
            <div>Multi-Platform</div>
            <div className="w-1 h-1 rounded-full bg-gray-700" />
            <div>24/7 Automation</div>
          </div>

          <a
            href="#contact"
            className="inline-block px-12 py-3 mt-10 text-xl font-medium text-white bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg"
          >
           Join Our Wishlist
          </a>
        </motion.div>
      </div>
    </section>
  );
}

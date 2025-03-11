"use client";

import { motion } from "framer-motion";
import {
  Bot,
  MessageSquare,
  BarChart3,
  Zap,
  Shield,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-10 w-10 text-purple-400" />,
    title: "Automated Messaging",
    description:
      "Engage with your audience across multiple platforms simultaneously with intelligent automated responses.",
  },
  {
    icon: <Bot className="h-10 w-10 text-purple-400" />,
    title: "AI-Powered Bots",
    description:
      "Deploy sophisticated bots that learn from interactions and improve over time.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-purple-400" />,
    title: "Advanced Analytics",
    description:
      "Gain valuable insights with comprehensive analytics and performance tracking.",
  },
  {
    icon: <Zap className="h-10 w-10 text-purple-400" />,
    title: "Lightning Fast",
    description:
      "Experience rapid response times and seamless performance across all your platforms.",
  },
  {
    icon: <Shield className="h-10 w-10 text-purple-400" />,
    title: "Secure & Private",
    description:
      "Your data is protected with enterprise-grade security and privacy measures.",
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-purple-400" />,
    title: "Continuous Updates",
    description:
      "Stay ahead with regular updates and new features based on the latest AI advancements.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-medium mb-8  text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-violet-500 bg-clip-text text-transparent"
          >
            Bot Overload is the new way
            <br />
            to automate messaging
          </motion.h2>
          <p className="text-lg text-gray-300 max-w-4xl  mx-auto">
            Our platform leverages cutting-edge AI to transform how businesses
            manage their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="border border-purple-900/20 hover:border-purple-500/30 transition-all duration-300 h-full p-3 rounded-lg">
                <div>
                  <div className="p-2 w-fit rounded-lg bg-purple-900/20 mb-4">
                    {feature.icon}
                  </div>
                  <h2 className="text-xl text-white">{feature.title}</h2>
                </div>

                <p className="text-gray-400 text-base">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { Play, Settings, User } from "lucide-react";
import React from "react";

const stepsData = [
  {
    number: "1",
    title: "Sign Up",
    description:
      "Create your account and connect your favorite apps and services",
    icon: <User size={48} className="h-10 w-10 text-purple-400" />,
    delay: 0.2,
  },
  {
    number: "2",
    title: "Configure Bots",
    description:
      "Set up your automation workflows with our intuitive interface",
    icon: <Settings size={48} className="h-10 w-10 text-purple-400" />,
    delay: 0.4,
  },
  {
    number: "3",
    title: "Launch & Monitor",
    description: "Start your bots and track their performance in real-time",
    icon: <Play size={48} className="h-10 w-10 text-purple-400" />,
    delay: 0.6,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className=" container mx-auto px-4 md:px-6 py-16">
      <motion.h2
       initial={{ opacity: 0, x: -100 }}  
       whileInView={{ opacity: 1, x: 0 }}  
       transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-medium mb-8  text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-violet-500 bg-clip-text text-transparent"
      >
        How It Works
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-2 md:px-4">
        {stepsData.map((step) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: +step.number * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="border border-purple-900/20 hover:border-purple-500/30 transition-all duration-300 h-full p-3 rounded-lg">
              <div className="flex md:items-start items-center  gap-4">
                <div className="p-2 w-fit rounded-lg bg-purple-900/20 ">
                  {step.icon}
                </div>
                <div>
                  <h2 className="text-xl text-white"> {step.title} </h2>
                  <p className="text-gray-400 text-base">
                    {" "}
                    {step.description}{" "}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;

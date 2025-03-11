"use client";

import Link from "next/link";
import type React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

import { subscribeToNewsletter } from "@/services/newsletter";

type StatusState = {
  loading: boolean;
  error: string | null;
  success: boolean;
};

export function Footer() {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<StatusState>({
    loading: false,
    error: null,
    success: false,
  });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const test = await subscribeToNewsletter(email);
      setStatus({ loading: false, error: null, success: true });
      setEmail("");
      console.log(test);
      if (test.success) toast.success("Successfully subscribed to newsletter!");
      else toast.error("Failed to subscribe to newsletter!");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      setStatus({ loading: false, error: errorMessage, success: false });
      toast.error(errorMessage);
    }
  };

  return (
    <footer className="text-gray-400 border-t border-gray-800 text-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-16 gap-8 container mx-auto px-2 md:px-4">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Bot Overload
            </span>
          </div>
          <p className="text-base">
            Revolutionizing social media automation with AI-powered solutions.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61573094013021"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors text-xl"
              aria-label="Facebook"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-500 transition-colors text-xl"
              aria-label="Twitter"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-500 transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-medium text-white mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="hover:text-purple-500 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className="hover:text-purple-500 transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-purple-500 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-medium text-white mb-4">Contact</h4>
          <ul className="space-y-3">
            <li>Dubai Marina, Dubai, UAE</li>
            <li>
              <a
                href="mailto:support@botoverload.com"
                className="hover:text-purple-500 transition-colors"
              >
                support@botoverload.com
              </a>
            </li>
            <li>
              <a
                href="tel:+97156671503"
                className="hover:text-purple-500 transition-colors"
              >
                +971 56 671 503
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-medium text-white mb-4">Stay Updated</h4>
          <form onSubmit={handleSubscribe} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500 text-white text-lg"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status.loading}
              aria-disabled={status.loading}
              className=" w-full bg-purple-600 hover:bg-purple-700 text-white text-xl cursor-pointer py-3 rounded-lg transition"
            >
              {status.loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 py-3 text-lg text-center">
        <p>© {new Date().getFullYear()} Bot Overload. All rights reserved.</p>
      </div>
    </footer>
  );
}

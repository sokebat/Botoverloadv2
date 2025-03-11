"use client";

import { ContactFormValues, contactSchema } from "@/schema/contact-form-schema";
import { submitContactForm } from "@/services/api";
import { ContactItemProps, SocialLinkProps } from "@/types/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);
    setLoading(true);
    try {
      const response = await submitContactForm(data);
      if (response.success) toast.success(response.message);
      else toast.error("Failed to send message.");
      reset();
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" " id="contact">
      <div className="container mx-auto px-2 md:px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-medium  text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-violet-500 bg-clip-text text-transparent"></h2>

        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-medium mb-8  text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-violet-500 bg-clip-text text-transparent"
        >
          Contact Us
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-start h-full gap-8 ">
          <div className="w-full bg-neutral-800 p-6 rounded-lg h-full text-white flex flex-col justify-between gap-4 min-h-full h-full">
            <div className="space-y-6">
              <ContactItem
                icon={<FaEnvelope size={20} className="text-purple-400" />}
                title="Email"
                detail="support@botoverload.com"
              />
              <ContactItem
                icon={<FaPhone size={20} className="text-purple-400" />}
                title="Phone"
                detail="+97156671503"
              />
              <ContactItem
                icon={<FaMapMarkerAlt size={20} className="text-purple-400" />}
                title="Location"
                detail="Dubai Marina, Dubai, UAE"
              />
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-lg font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <SocialLink icon={<FaFacebookF size={20} />} url="#" />
                <SocialLink icon={<FaTwitter size={20} />} url="#" />
                <SocialLink icon={<FaLinkedinIn size={20} />} url="#" />
                <SocialLink
                  icon={<FaInstagram size={20} />}
                  url="https://www.instagram.com/bot_overload/"
                />
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="text-lg font-medium mb-2">Business Hours</h4>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col gap-4 w-full bg-neutral-800 p-4 rounded-lg text-white"
          >
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                {...register("fullName")}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  {...register("email")}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  {...register("phone")}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Subject
              </label>
              <input
                {...register("subject")}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={1}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xl cursor-pointer py-3 rounded-lg transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

const ContactItem = ({ icon, title, detail }: ContactItemProps) => (
  <div className="flex items-center space-x-4 text-gray-300">
    <div className=" p-2 rounded-full bg-purple-500/10 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-gray-400">{title}</p>
      <p className="text-white">{detail}</p>
    </div>
  </div>
);

const SocialLink = ({ icon, url }: SocialLinkProps) => (
  <a
    href={url}
    className="p-2 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 transition-colors"
  >
    {icon}
  </a>
);

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Linkedin, Twitter, Github } from "lucide-react";
import Link from "next/link";

interface TeamProps {
  section: {
    title: string;
    subtitle?: string;
    members: Array<{
      name: string;
      role: string;
      bio: string;
      image?: string;
      linkedin?: string;
      twitter?: string;
      github?: string;
    }>;
  };
}

export default function Team({ section }: TeamProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {section.title}
          </motion.h2>
          
          {section.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {section.subtitle}
            </motion.p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section.members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="group"
            >
              <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                {/* Profile Image */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full animate-pulse" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-3xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-center text-emerald-600 dark:text-emerald-400 font-medium mb-4">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6 line-clamp-3">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  )}
                  {member.twitter && (
                    <Link
                      href={member.twitter}
                      target="_blank"
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all"
                    >
                      <Twitter className="w-5 h-5" />
                    </Link>
                  )}
                  {member.github && (
                    <Link
                      href={member.github}
                      target="_blank"
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl p-12 border border-emerald-200 dark:border-emerald-800">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Join Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for exceptional talent to join our team and help build the future of AI.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              View Open Positions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
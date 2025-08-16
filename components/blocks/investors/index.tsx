"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface InvestorsProps {
  section: {
    title?: string;
    description?: string;
    items?: Array<{
      title?: string;
      description?: string;
      image?: {
        src?: string;
        alt?: string;
      };
    }>;
  };
}

export default function Investors({ section }: InvestorsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Technology partners and supporters
  const defaultInvestors = [
    { title: "Open Source Community", description: "Contributors", image: undefined },
    { title: "AI Developers", description: "Community", image: undefined },
    { title: "Early Adopters", description: "Users", image: undefined },
    { title: "Tech Partners", description: "Collaborators", image: undefined },
  ];

  const investors = section.items?.length ? section.items : defaultInvestors;

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {section.title || "Our Journey"}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            {section.description || "Building the future with innovation and community support"}
          </motion.p>
        </div>

        {/* Investor Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {investors.map((investor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * (index + 1) }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 h-32 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-300" />
                
                {investor.image?.src ? (
                  <Image
                    src={investor.image.src}
                    alt={investor.image.alt || investor.title || ""}
                    width={150}
                    height={60}
                    className="max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {investor.title}
                    </div>
                    {investor.description && (
                      <div className="text-xs text-gray-400 dark:text-gray-600 mt-1">
                        {investor.description}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Investment Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">Innovation</div>
              <div className="text-emerald-100">Continuous Development</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">Quality</div>
              <div className="text-emerald-100">User-Focused Design</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">Growth</div>
              <div className="text-emerald-100">Expanding Horizons</div>
            </div>
          </div>
        </motion.div>

        {/* Press Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Built With
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
            {["React", "Next.js", "TypeScript", "Tailwind", "AI APIs", "Vercel"].map((press, i) => (
              <div key={i} className="text-lg font-semibold text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                {press}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
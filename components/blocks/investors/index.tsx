"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface InvestorsProps {
  section: {
    title: string;
    subtitle?: string;
    investors: Array<{
      name: string;
      logo?: string;
      description?: string;
    }>;
  };
}

export default function Investors({ section }: InvestorsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Default Silicon Valley investor logos (placeholder names)
  const defaultInvestors = [
    { name: "Sequoia Capital", description: "Leading Silicon Valley VC" },
    { name: "Andreessen Horowitz", description: "a16z" },
    { name: "Y Combinator", description: "YC" },
    { name: "Accel Partners", description: "Global VC" },
    { name: "Kleiner Perkins", description: "Pioneer VC" },
    { name: "Google Ventures", description: "GV" },
    { name: "Tiger Global", description: "Growth Investor" },
    { name: "SoftBank Vision", description: "Vision Fund" },
  ];

  const investors = section.investors?.length > 0 ? section.investors : defaultInvestors;

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
            {section.title || "Backed by Industry Leaders"}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            {section.subtitle || "Trusted and funded by the world's leading venture capital firms and technology companies"}
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
                
                {investor.logo ? (
                  <Image
                    src={investor.logo}
                    alt={investor.name}
                    width={150}
                    height={60}
                    className="max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {investor.name}
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
              <div className="text-4xl md:text-5xl font-bold mb-2">$50M+</div>
              <div className="text-emerald-100">Total Funding Raised</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">3</div>
              <div className="text-emerald-100">Funding Rounds</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$500M</div>
              <div className="text-emerald-100">Current Valuation</div>
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
            Featured In
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
            {["TechCrunch", "Forbes", "WSJ", "Bloomberg", "Reuters", "The Verge"].map((press, i) => (
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
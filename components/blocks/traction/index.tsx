"use client";

import { TrendingUp, Users, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TractionProps {
  section: {
    title: string;
    subtitle?: string;
    metrics: Array<{
      value: string;
      label: string;
      growth?: string;
      icon?: string;
    }>;
  };
}

const iconMap: { [key: string]: any } = {
  users: Users,
  globe: Globe,
  trending: TrendingUp,
  zap: Zap,
};

export default function Traction({ section }: TractionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              {section.title}
            </span>
          </motion.h2>
          {section.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              {section.subtitle}
            </motion.p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {section.metrics.map((metric, index) => {
            const Icon = iconMap[metric.icon || "trending"];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="relative group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>

                  {/* Metric Value */}
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {metric.value}
                  </div>

                  {/* Label */}
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {metric.label}
                  </div>

                  {/* Growth indicator */}
                  {metric.growth && (
                    <div className="mt-4 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold">
                        {metric.growth}
                      </span>
                    </div>
                  )}

                  {/* Hover effect gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 rounded-2xl transition-all duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Growth Chart Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Exponential Growth
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Last 12 months
            </span>
          </div>
          
          {/* Simple growth visualization */}
          <div className="h-48 flex items-end justify-between gap-2">
            {[20, 35, 45, 40, 55, 65, 75, 85, 90, 95, 98, 100].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={isInView ? { height: `${height}%` } : {}}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="flex-1 bg-gradient-to-t from-emerald-500 to-teal-500 rounded-t-lg"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
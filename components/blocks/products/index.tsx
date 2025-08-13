"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Brain, Zap, Shield } from "lucide-react";
import Link from "next/link";

interface ProductsProps {
  section: {
    title?: string;
    description?: string;
    items?: Array<{
      title?: string;
      description?: string;
      label?: string;
      icon?: string;
      url?: string;
    }>;
  };
}

const iconMap: { [key: string]: any } = {
  sparkles: Sparkles,
  brain: Brain,
  zap: Zap,
  shield: Shield,
};

const colorMap: { [key: string]: string } = {
  emerald: "from-emerald-500 to-teal-500",
  purple: "from-purple-500 to-pink-500",
  blue: "from-blue-500 to-cyan-500",
  orange: "from-orange-500 to-red-500",
};

export default function Products({ section }: ProductsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Our Products
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {section.title}
          </motion.h2>
          
          {section.description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {section.description}
            </motion.p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section.items?.map((product, index) => {
            const Icon = iconMap[product.icon || "sparkles"];
            const gradientColor = colorMap["emerald"];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="group relative"
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${gradientColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {product.description}
                  </p>

                  {/* Label */}
                  {product.label && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                      {product.label}
                    </p>
                  )}

                  {/* CTA Link */}
                  {product.url && (
                    <Link
                      href={product.url}
                      className={`inline-flex items-center gap-2 text-transparent bg-gradient-to-r ${gradientColor} bg-clip-text font-semibold hover:gap-3 transition-all`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Explore All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
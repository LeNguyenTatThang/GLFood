"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import products from "@/modules/data"
import ProductSkeleton from "@/modules/ProductSkeleton"

export default function Home() {
  const isLoading = false

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">

        {isLoading
          ? Array.from({ length: 10 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))
          : products.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl bg-[#1E1E1E] p-3 shadow-sm hover:shadow-lg transition"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-3 text-lg font-semibold leading-snug line-clamp-2 text-white">
                  {item.name}
                </h3>

                <div className="mt-1 flex font-semibold text-sm">
                  <p className="text-red-500">{item.price}</p>
                  <span className="mx-2 text-gray-400">-</span>
                  <p className="text-gray-300">{item.weight}</p>
                </div>
              </motion.div>
            ))}
      </div>
    </div>
  )
}
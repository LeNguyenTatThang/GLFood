"use client"
import React from "react"
import Link from "next/link"
import { ShoppingCart, Search } from "lucide-react"
import Image from "next/image"
import { useSearch } from "@/modules/SearchContext"

function Header() {
  const { keyword, setKeyword } = useSearch()
  return (
    <header className="w-full bg-[#1C1C1C] backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        <Link href="/" className="flex items-center gap-2">
          <Image
            width={100}
            height={100}
            src="/glf.png"
            alt="logo"
            className="h-12 w-auto"
          />
        </Link>

        <div className="flex flex-1 relative mx-4 md:w-80 md:flex-none md:mx-0">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Tìm món ăn..."
            className="
              w-full rounded-lg bg-[#2A2A2A]
              py-2 pl-10 pr-4 text-sm text-white
              outline-none
              focus:ring-2 focus:ring-yellow-400
            "
          />
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-yellow-500 text-white">
            Trang chủ
          </Link>

          <Link href="/cart" className="hover:text-yellow-500 text-white">
            Giỏ hàng
          </Link>

          <Link
            href="/login"
            className="rounded-md bg-yellow-400 px-4 py-2 text-black hover:bg-yellow-500"
          >
            Đăng nhập
          </Link>
        </nav>

        <Link
          href="/cart"
          className="md:hidden relative"
        >
          <ShoppingCart size={26} className="text-white" />

          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            0
          </span>
        </Link>
      </div>
    </header>
  )
}

export default Header
import React from "react"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"

function Header() {
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

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-yellow-500">
            Trang chủ
          </Link>

          <Link href="/cart" className="hover:text-yellow-500">
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
          <ShoppingCart size={26} />

          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            0
          </span>
        </Link>
      </div>
    </header>
  )
}

export default Header
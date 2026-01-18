import React from "react"

function Footer() {
  return (
    <footer className="w-full bg-[#1E1E1E] text-gray-400 text-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 text-center">
        © {new Date().getFullYear()} GiaLaiFood. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
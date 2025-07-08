import React from 'react'

const Footer = () => {
  return (
    <div>
     <footer className="w-full bg-gradient-to-r from-blue-100 via-red-50 to-gray-100 shadow-[0_-6px_15px_rgba(0,0,0,0.08)] text-gray-600 text-center text-sm py-6 mt-12">
  <p className="mb-1">
    © {new Date().getFullYear()} Mini E‑Commerce SPA — Qtec Developer Assessment
  </p>
  <p>
    Designed & developed by{" "}
    <a
      href="https://github.com/Newaz-Sourav"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      Newaz Sourav
    </a>
  </p>
</footer>


    </div>
  )
}

export default Footer

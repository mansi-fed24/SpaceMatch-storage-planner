import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="bg-[#f7f3ee] border-b border-[#eae3dc] sticky top-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-4 mx-auto lg:px-10 max-w-7xl"> 

        {/* Logo */}
        <div className="text-2xl font-semibold text-[#2B2B2B]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
          Space<span className="text-[#C9614A] italic">Match</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="items-center hidden gap-10 lg:flex">
            <ul className="hidden lg:flex gap-8 text-[#2B2B2B] text-sm">
            <li><Link to="/" className="hover:text-[#C9614A] transition-colors">How it works</Link></li>
            <li><Link to="/inspiration" className="hover:text-[#C9614A] transition-colors">Inspiration</Link></li>
            <li><Link to="/planner" className="hover:text-[#C9614A] transition-colors">Planner</Link></li>
            <li><a href="https://sortix.se" target="_blank" rel="noopener noreferrer"
                className="hover:text-[#C9614A] transition-colors">Sortix →</a></li>
            </ul>

            {/* Desktop CTA */}
            <Link to="/planner"
            className="hidden lg:block bg-[#C9614A] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#3D2F28] transition-colors">
            Start planning
            </Link>
        </div>

        {/* Mobile right side: CTA + Hamburger */}
        <div className="flex items-center gap-3 lg:hidden" ref={menuRef}>

          {/* Small CTA still visible on mobile */}
          <Link to="/planner"
            className="bg-[#C9614A] text-white px-4 py-1.5 rounded-full text-xs font-medium">
            Start planning
          </Link>

          {/* Hamburger button */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-lg hover:bg-[#ede8e0] transition-colors"
              aria-label="Toggle menu"
            >
              {/* Bar 1 */}
              <span className={`block h-[1.5px] bg-[#2B2B2B] transition-all duration-300 ease-in-out ${
                menuOpen ? 'w-5 rotate-45 translate-y-[6.5px]' : 'w-5'
              }`} />
              {/* Bar 2 */}
              <span className={`block h-[1.5px] w-5 bg-[#2B2B2B] transition-all duration-200 ease-in-out ${
                menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
              }`} />
              {/* Bar 3 */}
              <span className={`block h-[1.5px] bg-[#2B2B2B] transition-all duration-300 ease-in-out ${
                menuOpen ? 'w-5 -rotate-45 -translate-y-[6.5px]' : 'w-5'
              }`} />
            </button>

            {/* Dropdown */}
            {menuOpen && (
              <div className="absolute right-0 top-[calc(100%+8px)] w-48 bg-[#f7f3ee] border border-[#eae3dc] rounded-xl shadow-lg overflow-hidden">
                
                {/* Arrow tip */}
                <div className="absolute -top-[6px] right-3 w-3 h-3 bg-[#f7f3ee] border-l border-t border-[#eae3dc] rotate-45" />

                <ul className="flex flex-col text-sm text-[#2B2B2B]">
                  <li>
                    <Link to="/" onClick={() => setMenuOpen(false)}
                      className="block px-5 py-3 hover:bg-[#ede8e0] hover:text-[#C9614A] transition-colors">
                      How it works
                    </Link>
                  </li>
                  <li className="border-t border-[#eae3dc]">
                    <Link to="/inspiration" onClick={() => setMenuOpen(false)}
                      className="block px-5 py-3 hover:bg-[#ede8e0] hover:text-[#C9614A] transition-colors">
                      Inspiration
                    </Link>
                  </li>
                  <li className="border-t border-[#eae3dc]">
                    <Link to="/planner" onClick={() => setMenuOpen(false)}
                      className="block px-5 py-3 hover:bg-[#ede8e0] hover:text-[#C9614A] transition-colors">
                      Planner
                    </Link>
                  </li>
                  <li className="border-t border-[#eae3dc]">
                    <a href="https://sortix.se" target="_blank" rel="noopener noreferrer"
                      className="block px-5 py-3 hover:bg-[#ede8e0] hover:text-[#C9614A] transition-colors">
                      Sortix →
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
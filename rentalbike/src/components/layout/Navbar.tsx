'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { SITE_NAME } from '@/lib/constants'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/bikes', label: 'Vélos' },
    { href: '/trips', label: 'Balades' },
  ]

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Bouticycle"
              width={40}
              height={40}
            />
          </Link>

          {/* Title — centered */}
          <span className="hidden md:block text-lg font-normal text-zinc-800 text-center">{SITE_NAME}</span>

          {/* Desktop Navigation + Hamburger — right aligned */}
          <div className="flex items-center justify-end gap-8">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-all ${
                    isActive(link.href)
                      ? 'font-bold text-black'
                      : 'font-normal text-gray-600 hover:text-black'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t mt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 transition-all ${
                    isActive(link.href)
                      ? 'font-bold text-black'
                      : 'font-normal text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

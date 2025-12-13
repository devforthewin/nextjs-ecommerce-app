'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/catalog', label: 'Catalog' },
  { href: '/cart', label: 'Cart' },
  { href: '/account', label: 'Account' },
]

export function AppHeader() {
  const pathname = usePathname()

  return (
    <header className="h-[70px] bg-black/90 backdrop-blur drop-shadow-md drop-shadow-[#ed68a3]">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-semibold tracking-tight text-[#ed68a3]">
          Bad Rabbit
        </Link>

        <nav className="flex gap-2 text-lg">
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  'px-3 py-1 transition-colors ' +
                  (isActive ? 'text-[#ed68a3] font-semibold' : 'text-white hover:text-[#ed68a3]')
                }
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

import React from "react"
import Link from 'next/link'

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      }}>
      <Link href="/about">about</Link>
      <Link href="/products">products</Link>
      <Link href="/about/history">history</Link>
    </header>
  )
}

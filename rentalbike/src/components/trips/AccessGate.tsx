
'use client'

import { SyntheticEvent, ReactNode, useState } from 'react'
import Image from 'next/image'
import { SITE_NAME } from '@/lib/constants'

interface AccessGateProps {
  children: ReactNode
}

export const AccessGate = ({ children }: AccessGateProps) => {
  const [inputCode, setInputCode] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/validate-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: inputCode.trim() }),
      })

      const data: { valid?: boolean } = await res.json()

      if (data.valid) {
        setIsUnlocked(true)
      } else {
        setError('Code d\'accès invalide. Veuillez réessayer.')
      }
    } catch {
      setError('Une erreur s\'est produite. Veuillez réessayer.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isUnlocked) return <>{children}</>

  return (
    <section className="min-h-[70vh] bg-dark flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white/10 rounded-2xl p-6 md:p-8 outline outline-1 outline-white/20">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/images/logo.png"
            alt={`${SITE_NAME} Logo`}
            width={56}
            height={56}
            className="mb-3"
          />
          <h1 className="text-white text-2xl font-semibold text-center">Accès Privé</h1>
          <p className="text-white/80 text-sm text-center mt-2">
            Entrez votre code de réservation pour accéder aux balades exclusives.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            placeholder="Entrez le code d'accès"
            className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-bouticycle"
            disabled={isLoading}
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-bouticycle text-dark font-semibold py-3 disabled:opacity-60"
          >
            {isLoading ? 'Vérification...' : 'Débloquer les Balades'}
          </button>
        </form>

        {error && <p className="mt-3 text-sm text-red-300 text-center">{error}</p>}
      </div>
    </section>
  )
}
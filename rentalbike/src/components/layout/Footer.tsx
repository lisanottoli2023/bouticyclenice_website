import Image from 'next/image'
import { SITE_NAME } from '../../lib/constants'

export const Footer = () => {
    return (
        <footer className="w-full h-32 relative bg-gradient-to-br from-zinc-800 to-zinc-800/90 overflow-hidden">
            <div className="w-64 h-64 right-1/4 top-0 absolute bg-yellow-300/10 rounded-full blur-3xl" />
            <div className="w-64 h-64 left-1/4 top-0 absolute bg-yellow-300/5 rounded-full blur-3xl" />
            <div className="flex flex-col items-center justify-center h-full relative z-10">
                <Image 
                    src="/images/logo.png" 
                    alt={`${SITE_NAME} Logo`}
                    width={44}
                    height={44}
                />
                <p className="text-slate-50 text-lg font-normal font-arimo leading-7">
                    {SITE_NAME}
                </p>
            </div>
        </footer>
    )
}
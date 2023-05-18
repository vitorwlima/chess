import { Footer } from '@/components/Footer'
import { Title } from '@/components/Title'
import { GameStateContextProvider } from '@/hooks/useGameState'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Chessz',
  description: 'Awesome chess app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GameStateContextProvider>
        <body className={nunito.className}>
          <main className="flex h-screen flex-col items-center justify-between p-12">
            <Title />
            {children}
            <Footer />
          </main>
        </body>
      </GameStateContextProvider>
    </html>
  )
}

'use client'

import { useGameState } from '@/hooks/useGameState'

const Lobby = () => {
  const { gameState } = useGameState()

  if (!gameState) return null

  const handleCopyRoomId = () => {
    navigator.clipboard.writeText(gameState.roomId)
  }

  return (
    <div>
      <section className="flex w-full max-w-lg flex-col items-center gap-y-20 text-xl">
        <div className="mx-auto flex items-center gap-x-4">
          <p>Código da sala:</p>
          <button
            className="rounded bg-cyan-500 px-4 py-1 transition-all hover:brightness-90"
            onClick={() => handleCopyRoomId()}
          >
            {gameState.roomId}
          </button>
        </div>
        <ul className="flex min-w-[40%] flex-col gap-y-1">
          {gameState.players.map((player) => (
            <li key={player.socketId}>
              {player.name}
              {player.isMe ? ' (eu)' : ''}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export { Lobby }

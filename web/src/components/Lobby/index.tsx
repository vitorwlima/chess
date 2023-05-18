'use client'

import { useGameState } from '@/hooks/useGameState'
import { Events } from '@/types/Events'
import { Button } from '../Button'
import { ButtonLink } from '../ButtonLink'

const Lobby = () => {
  const { emitEvent, gameState } = useGameState()

  if (!gameState) return null

  const handleCopyRoomId = () => {
    navigator.clipboard.writeText(gameState.roomId)
  }

  const handleStart = () => {
    emitEvent(Events.START_GAME, {})
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
        <div className="flex min-w-[40%] flex-col gap-y-4">
          <Button
            onClick={handleStart}
            disabled={gameState.players.length !== 2}
          >
            Start
          </Button>
          <ButtonLink href="/" reverse>
            Voltar
          </ButtonLink>
        </div>
      </section>
    </div>
  )
}

export { Lobby }

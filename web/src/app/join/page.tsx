'use client'

import { Button } from '@/components/Button'
import { ButtonLink } from '@/components/ButtonLink'
import { Input } from '@/components/Input'
import { useGameState } from '@/hooks/useGameState'
import { Events } from '@/types/Events'
import { useRef } from 'react'

const Join = () => {
  const nameInputRef = useRef<HTMLInputElement>(null)
  const roomIdInputRef = useRef<HTMLInputElement>(null)
  const { emitEvent } = useGameState()

  const handleJoinRoom = () => {
    emitEvent(Events.JOIN_ROOM, {
      name: nameInputRef.current!.value,
      roomId: roomIdInputRef.current!.value,
    })
  }

  return (
    <section className="flex min-w-[360px] flex-col items-center gap-8">
      <div className="flex w-full flex-col items-center gap-4">
        <Input
          label="Room ID"
          name="roomid"
          id="roomid"
          type="text"
          minLength={6}
          maxLength={6}
          ref={roomIdInputRef}
        />
        <Input
          label="Name"
          name="name"
          id="name"
          type="text"
          minLength={2}
          maxLength={12}
          ref={nameInputRef}
        />
      </div>
      <div className="flex w-full flex-col items-center gap-4">
        <Button onClick={handleJoinRoom}>Join</Button>
        <ButtonLink href="/" reverse>
          Go back
        </ButtonLink>
      </div>
    </section>
  )
}

export default Join

'use client'

import { Button } from '@/components/Button'
import { ButtonLink } from '@/components/ButtonLink'
import { Input } from '@/components/Input'
import { useGameState } from '@/hooks/useGameState'
import { useRef } from 'react'

const Create = () => {
  const nameInputRef = useRef<HTMLInputElement>(null)
  const { emitEvent } = useGameState()

  const handleCreateRoom = () => {
    emitEvent('create-room', { name: nameInputRef.current!.value })
  }

  return (
    <section className="flex min-w-[360px] flex-col items-center gap-8">
      <Input
        label="Name"
        name="name"
        id="name"
        type="text"
        minLength={2}
        maxLength={12}
        ref={nameInputRef}
      />
      <div className="flex w-full flex-col items-center gap-4">
        <Button onClick={handleCreateRoom}>Create</Button>
        <ButtonLink href="/" reverse>
          Go back
        </ButtonLink>
      </div>
    </section>
  )
}

export default Create

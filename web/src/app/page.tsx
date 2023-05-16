'use client'

import { socket } from '@/socket'

export default function Home() {
  const handleJoinRoom = async () => {
    console.log('criando sala/joinando')
    const res = socket.emit('create-room', { name: 'teste' })
    console.log(res)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Chess</h1>
      <button onClick={() => handleJoinRoom()}>Join room</button>
    </main>
  )
}

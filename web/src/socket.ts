import { io } from 'socket.io-client'

const socket = io('http://localhost:3333')

socket.on('gamestate-update', (gameState) => {
  console.log({ gameState })
})

export { socket }

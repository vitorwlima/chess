import { ButtonLink } from '@/components/ButtonLink'

const Home = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <ButtonLink href="/create">Create game</ButtonLink>
      <ButtonLink href="/join">Join game</ButtonLink>
    </section>
  )
}

export default Home

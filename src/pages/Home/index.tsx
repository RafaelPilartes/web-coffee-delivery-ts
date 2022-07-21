import Reacr from 'react'
import { OurCoffees } from './components/OurCoffees'
import { Intro } from './components/Intro'
import { HomeConteiner } from './styles'

function Home() {
  return (
    <HomeConteiner>
      <Intro />
      <OurCoffees />
    </HomeConteiner>
  )
}

export default Home

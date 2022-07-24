import Reacr from 'react'
import { OurCoffees } from './components/_sections/OurCoffees'
import { Intro } from './components/_sections/Intro'
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

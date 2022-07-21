import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { ConteinerLayout } from './styles'

export function Layout() {
  return (
    <ConteinerLayout>
      <Header />
      <Outlet />
    </ConteinerLayout>
  )
}

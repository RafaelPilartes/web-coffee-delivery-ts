import { useContext } from 'react'
import { AppContext } from '../provider/AppProvider'

export function useMyContext() {
  const context = useContext(AppContext)

  return context
}

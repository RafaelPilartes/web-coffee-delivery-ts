import { createContext, useEffect, useState } from 'react'
import produce from 'immer'

import { IChildren } from '../@types/IChildren'
import { CoffeeProps } from '../@types/ICoffee'

export interface CartItem extends CoffeeProps {
  quanty: number
}
interface CartContextType {
  cartItems: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void
  cartQuantity: number
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) => void
  removeItemToCart: (cartItemId: number) => void
  cartItemTotal: number
  clearCart: () => void
}
const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)
export function CartContextProvider({ children }: IChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storageCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)

    if (storageCartItems) {
      return JSON.parse(storageCartItems)
    }

    return []
  })

  const cartItemTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quanty
  }, 0)
  const cartQuantity = cartItems.length

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      cartItem => cartItem.id === coffee.id
    )

    const newCart = produce(cartItems, draft => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quanty += coffee.quanty
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) {
    const newCart = produce(cartItems, draft => {
      const coffeeExistInCart = cartItems.findIndex(
        cartItem => cartItem.id === cartItemId
      )

      if (coffeeExistInCart >= 0) {
        const item = draft[coffeeExistInCart]
        draft[coffeeExistInCart].quanty =
          type === 'increase' ? item.quanty + 1 : item.quanty - 1
      }
    })

    setCartItems(newCart)
  }

  function removeItemToCart(cartItemId: number) {
    const newCart = produce(cartItems, draft => {
      const coffeeExistsInCart = cartItems.findIndex(
        item => item.id === cartItemId
      )

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  function clearCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        changeCartItemQuantity,
        removeItemToCart,
        cartItemTotal,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

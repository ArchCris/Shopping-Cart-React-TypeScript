import React, {ReactNode, createContext, useContext } from 'react'

type shoppingCartProviderProps = {
    children: ReactNode
}

const shoppingCartContext = createContext({})

export function useShoppiungCart (){
  return (useContext(shoppingCartContext)
  )
}

export function shoppingCartProvider ({children}:shoppingCartProviderProps){
    return (
    <shoppingCartContext.Provider value={{}}>
        {children}
    </shoppingCartContext.Provider>
)}


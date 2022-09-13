import { createContext, ReactNode, useContext, useState } from "react"
import { ShoppingCart } from "../components/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"
const ShoppingCartContext = createContext({});
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
type ShoppingCartProviderProps={
children:ReactNode
}
export function ShoppingCartProvider({children}){
<ShoppingCartContext.Provider value={{}}>
    {children}
</ShoppingCartContext.Provider>
}
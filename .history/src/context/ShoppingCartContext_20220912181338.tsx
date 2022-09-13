import {useContext,createContext} from "react"
const ShoppingCartContext = createContext({} as ShoppingCartContex)
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
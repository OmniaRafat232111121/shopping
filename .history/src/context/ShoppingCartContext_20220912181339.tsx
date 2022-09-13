import {useContext,createContext} from "react"
const ShoppingCartContext = createContext({} as ShoppingC)
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
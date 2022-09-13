import {useContext,createContext} from "react"
const ShoppingCartContext = createContext({} as Sh)
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
import {useContext,} from "react"
const ShoppingCartContext = createContext({} as ShoppingCartContext)
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
import {useContext} from "react"
const SHoppingCartContext=createContext
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
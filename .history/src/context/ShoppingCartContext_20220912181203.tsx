import {useContext} from "react"
const SHoppingCartContext=create
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
import {useContext} from "react"

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
import {useContext} from "recac"
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
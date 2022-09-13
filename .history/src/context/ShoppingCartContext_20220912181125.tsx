import {useContext} from "recact"
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
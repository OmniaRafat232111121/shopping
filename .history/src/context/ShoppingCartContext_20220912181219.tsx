import {useContext} from "react"
const ShoppingCartContext=createContext({

})
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
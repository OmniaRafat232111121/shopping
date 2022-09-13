import {useContext} from "react"
const SoppingCartContext=createContext({

})
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
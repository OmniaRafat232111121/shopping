import {useContext,createContext} from "react"
const ShoppingCartContext = createContext({});
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({children}){
<ShoppingCartProvider va>
    {children}
</ShoppingCartProvider>
}
import {useContext,createContext} from "react"
const ShoppingCartContext = createContext({});
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
type=
export function ShoppingCartProvider({children}){
<ShoppingCartProvider value={{}}>
    {children}
</ShoppingCartProvider>
}
import {useContext,createContext} from "react"
const ShoppingCartContext = createContext({});
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
type ShoppingCartProvider={
ch
}
export function ShoppingCartProvider({children}){
<ShoppingCartProvider value={{}}>
    {children}
</ShoppingCartProvider>
}
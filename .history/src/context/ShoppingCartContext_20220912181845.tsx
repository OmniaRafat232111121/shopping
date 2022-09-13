import {useContext,createContext} from "react"
const ShoppingCartContext = createContext({});
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
type ShoppingCartProviderProps={
children:ReactNode
}
export function ShoppingCartProvider({children}){
<ShoppingCartCO value={{}}>
    {children}
</ShoppingCartCO>
}
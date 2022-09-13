import { createContext, ReactNode, useContext} from "react"
const ShoppingCartContext = createContext({});
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
type ShoppingCartProviderProps={
    children:ReactNode
}
type ShoppingCartConte
export function ShoppingCartProvider({children}){
<ShoppingCartContext.Provider value={{}}>
    {children}
</ShoppingCartContext.Provider>
}
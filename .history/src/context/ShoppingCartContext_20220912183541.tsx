import { createContext, ReactNode, useContext} from "react"
const ShoppingCartContext = createContext({} as ShoppingCartContext);
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
type ShoppingCartProviderProps={
    children:ReactNode
}
type ShoppingCartContext={
    openCart:()=>void
    getItemQuaantity:(id:number)=>number
    increasecartQuantity:(id:number)=>void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void

}
export function ShoppingCartProvider({children}){

<ShoppingCartContext.Provider value={{
       getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
        }}>
    {children}
</ShoppingCartContext.Provider>
}
import { createContext,useState, ReactNode, useContext} from "react"
const ShoppingCartContext = createContext({} as ShoppingCartContext);
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
type ShoppingCartProviderProps={
    children:ReactNode
}
type CartItems={
    id:number
    nam
    quantity:number
}
type ShoppingCartContext={
    openCart:()=>void
    getItemQuaantity:(id:number)=>number
    increasecartQuantity:(id:number)=>void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void

}
export function ShoppingCartProvider({children}){
const[cartItems,setCartItems]=useState();

<ShoppingCartContext.Provider value={{
       getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
        }}>
    {children}
</ShoppingCartContext.Provider>
}
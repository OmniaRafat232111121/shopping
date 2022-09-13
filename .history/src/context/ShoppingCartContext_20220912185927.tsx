import { createContext,useState, ReactNode, useContext} from "react"
const ShoppingCartContext = createContext({} as ShoppingCartContext);
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
type ShoppingCartProviderProps={
    //type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
    children:ReactNode
}
type CartItem={
    id:number
    name:string
    quantity:number
}
type ShoppingCartContext={
    openCart:()=>void
    getItemQuaantity:(id:number)=>number
    increasecartQuantity:(id:number)=>void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}
export function ShoppingCartProvider({children}:any){
const[cartItems,setCartItems]=useState<CartItem []>([]);
  function getItemQuantity(id:number){
    return cartItems.find(item=>item.id===id)?.quantity||0
  }
  function increaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
return(
    <ShoppingCartContext.Provider
      value={{}}
    >
      {children}
    </ShoppingCartContext.Provider>
)
}
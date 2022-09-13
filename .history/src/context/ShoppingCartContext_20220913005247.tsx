import { createContext, ReactNode, useContext, useState } from "react"

/*context*/
//-consumer componet use data of provider   
//-provider=>store data
type ShoppingCartContext={
  openCart:()=>void
  closeCart:()=>void
  getItemQuantity:(id:number)=>number
  increaseCartQuantity:(id:number)=>void
  decreaseCartQuantity:(id:number)=>void
  removeFromCart:(id:number)=>void
  cartQuantity: number
  cartItems: CartItem[]

}
const ShoppingCartContext=createContext({}as ShoppingCartContext)
//useContext
export function useShoppingCart(){
  return useContext(ShoppingCartContext);
}
//provider
export function ShoppingCartProvider: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>(
    []
  )

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  //increase Cart
  function increaseCartQuantity(id: number) {
    setCartItems(currItems=>{
      if(currItems.find(item=>item.id===id)==null){
        return[...currItems,{id,quantity:1}]
      }
      else{
        return currItems.map(item=>{
          if(item.id===id){
            return{...item,quantity:item.quantity+1}
          }
          else{
            return item
          }
        })
      }
    })
  }
  //decrease Cart
  function decreaseCartQuantity(id: number) {
   setCartItems(currItems=>{
    if(currItems.find(item=>item.id!==id))
    {
      return currItems.filter(item => item.id !== id)
    }
    else{
      return currItems.map(item=>{
        if(item.id===id){
          return{...item,quantity:item.quantity-1}
        }
        else{
          return item
        }
      })
    }
   })
  }
  //remove cart
  function removeFromCart(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
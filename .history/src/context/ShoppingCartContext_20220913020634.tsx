
import { createContext, ReactNode, useContext, useState } from "react"
// import { ShoppingCart } from "../components/ShoppingCart"
/*context*/
//-consumer componet use data of provider   
//-provider=>store data
type ShoppingCartProviderProps = {
  children: ReactNode
}
type ShoppingCartContext={
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]

}
interface CartItem {
  id:number
  quantity:number

}
const ShoppingCartContext=createContext({}as ShoppingCartContext)
//useContext
export function useShoppingCart(){
  return useContext(ShoppingCartContext);
}
// create fun provider
const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  
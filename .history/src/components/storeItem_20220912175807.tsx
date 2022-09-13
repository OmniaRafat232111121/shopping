import {Card,Button} from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
type StoreItemProps={
id:number,
name:string,
price:number,
imgUrl:string
}
export function StoreItem({id,name,price,imgUrl}:StoreItemProps){
    (
        <div
          className="d-flex align-items-center flex-column"
          style={{ gap: ".5rem" }}
        >
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ gap: ".5rem" }}
          >
            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
            <div>
              <span className="fs-3">{quantity}</span> in cart
            </div>
            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
          </div>
          <Button
            onClick={() => removeFromCart(id)}
            variant="danger"
            size="sm"
          >
            Remove
          </Button>
        </div>
      )}
    return(
        <Card>
       <Card.Img  variant="top" src={imgUrl} height="200px" style={{objectFit:"cover"}}/>
       <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex align-items-center flex-column">
                     <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
         {quantity=== 0?(
            <Button className="w-100"> +Add to Cart</Button>
         ): (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button >-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button >+</Button>
              </div>
              <Button>
                Remove
              </Button>
            </div>
          )}
        </div>
       </Card.Body>
        </Card>
    )

}
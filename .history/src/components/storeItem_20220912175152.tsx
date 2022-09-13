import {Card,Button} from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
type StoreItemProps={
id:number,
name:string,
price:number,
imgUrl:string
}

export function StoreItem({id,name,price,imgUrl}:StoreItemProps){
    const quantity=0;
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
            <Button>
                +Add to Cart
            </Button>
         )}
        </div>
       </Card.Body>
        </Card>
    )

}
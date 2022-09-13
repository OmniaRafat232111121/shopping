import storeItem from "../data/items.json"
import {Col,Row} from "rect-bootstrap";
export  function Store(){
    return (
        <h1>Store</h1>
       <Row>
{
storeItem
}
<Col></Col>
       </Row>

    )
}
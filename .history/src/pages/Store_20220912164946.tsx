import storeItems from "../data/items.json"
import {Col,Row} from "rect-bootstrap";
export  function Store(){
    return (
        <>
        <h1>Store</h1>
        <Row>
            {storeItems.map(item=>({
                <Col>{</Col>
            }))}
            
        </Row>
        </>


    )
}
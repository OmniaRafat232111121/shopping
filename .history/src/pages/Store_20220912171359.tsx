import { Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json";
import StoreItem from"../components/StoreItem";
export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row lg={3} md={2} sm={1} className="g-3">
        {storeItems.map(item => (
       <Col key={item.id}>
       <StoreItem {...item} />
       </Col>
        ))}
      </Row>
    </>
  )
}
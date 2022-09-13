import { Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json"
export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row lg={3} md={2} sm={1} classn>
        {storeItems.map(item => (
          <Col key={item.id}>
            {JSON.stringify(item)}
          </Col>
        ))}
      </Row>
    </>
  )
}
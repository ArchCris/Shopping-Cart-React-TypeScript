
import storeItems from "../data/items.json"
import {Row, Col} from "react-bootstrap"
import StoreItem from "../components/StoreItem"

const Store = () => {
  return (
    <>
    <Row md={2} lg={3} xs={1} className="g-3">
        {storeItems.map(item=>(
          <Col><StoreItem key={item.id} {...item}/></Col>
        ))}
    </Row>
    </>
  )
}

export default Store
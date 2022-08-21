import {Button, Card, NavItem} from "react-bootstrap"
import formatCjurrency from "../utilities/formatCurrency"

type storeItemProps = {
  id: number,
  name: string,
  price: number,
  imgUrl: string
}
const StoreItems = ({name,price,imgUrl,id}:storeItemProps) => {

  const quantity = 1

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imgUrl} height="200px" style={{objectFit:"cover"}}/>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-2">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCjurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
          <Button className="w-100">Add product</Button>) : (
          <>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex align-items-center justify-content-center" style={{gap:".5rem"}}>
                <Button className="w-10">-</Button>
                <div className="fs-3">{quantity}<span> in cart</span></div>
                <Button className="w-10">+</Button>
              </div>
              <Button variant="danger" style={{margin:'10px'}}>Remove</Button>
            </div>
          </>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default StoreItems
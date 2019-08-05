import React,{Component} from 'react';
import * as Message from "./../contants/Message"
class CartItem extends Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     quantity:1
  //   }
  // }
  render(){
    let {item, showSubTotal}=this.props
  return (
    <tr>
    <th scope="row">
      <img src={item.product.image} alt="" className="img-fluid z-depth-0" />
    </th>
    <td>
      <h5>
        <strong>{item.product.name}</strong>
      </h5>
    </td>
    <td>{item.product.price}$</td>
    <td className="center-on-small-only">
      <span className="qty">{item.quantity} </span>
      <div className="btn-group radio-group" data-toggle="buttons">
        <label onClick={()=>this.onUpdateQuantity(item.product, item.quantity-1)} className="btn btn-sm btn-primary
      btn-rounded waves-effect waves-light">
          <a href="#/">—</a>
        </label>
        <label onClick={()=>this.onUpdateQuantity(item.product, item.quantity+1)}  className="btn btn-sm btn-primary
      btn-rounded waves-effect waves-light">
          <a href="#/">+</a>
        </label>
      </div>
    </td>
    <td>{showSubTotal}$</td>
    <td>
      <button onClick={()=>this.onDelete(item.product)}
       type="button" 
       className="btn btn-sm btn-primary waves-effect waves-light" 
       data-toggle="tooltip" 
       data-placement="top"
       data-original-title="Remove item">
        X
      </button>
    </td>
  </tr>            
                      
  );
}
onDelete(product){
  let{ onDeleteProductInCart}=this.props
  onDeleteProductInCart(product)
  this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCES)

}
onUpdateQuantity=(product,quantity)=>{
  if(quantity>0){
    // this.setState({
    //   quantity:quantity
    // })
    this.props.onUpdateQuantity(product,quantity)
    
  }
  this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCES)

}
}
export default CartItem;

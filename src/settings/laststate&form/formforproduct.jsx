const Cart = (props) => {
    console.log("Inside Cart: ", props);
  
    let totalPrice = 0;
    for (let i = 0; i < props.data.length; i++) {
      totalPrice += props.data[i].price;
    }
  
    return (
      <div>
        <p>
          Total Proce of {props.data.length} elements is {totalPrice}
        </p>
      </div>
    );
  };
  export default Cart
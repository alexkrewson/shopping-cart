import React from 'react';
import { Component, useEffect, useState } from 'react';
import './App.css';

function Shop() {

  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);



  // useEffect(() => {

  //   console.log('it is happening')
  //   console.log(cartItems)

  // });



  function buttonClicked(e) {
    // console.log(e.target.id)
    let newItem = e.target.id
    let newArray = cartItems
    newArray.push(newItem)
    setCount(count + 1)

    if (true) {
      setCartItems(newArray)
    }

    // console.log('cartItems: ')
    // console.log(cartItems)

  }

  // function stupidButton(e) {
  //   setCount(count + 1)
  // }

  function DisplayItems() {

    // cartItems.forEach( (item) => {

    //   return (
    //   <h1>{item}</h1>
    //   )
    // })
    return (
     <div>
       {cartItems.map(item => <h1>{item}</h1>)}
     </div>
    )
  }


  return (

    <div className="Shop">
      <div className='products'>
        <h1>Shop Page</h1>
        <div className='itemContainer'>item 1
          <button onClick={buttonClicked} id='item1'>add to cart</button>
        </div>
        <div className='itemContainer'>item 2
          <button onClick={buttonClicked} id='item2'>add to cart</button>
        </div>
      </div>

      <div className='Cart'>

        <h1>Cart</h1>
        {/* <p>{cartItems}</p> */}
        <DisplayItems />
      </div>


    </div>
  );
}



export default Shop;

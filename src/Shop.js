import React from 'react';
import { Component, useEffect, useState } from 'react';
import './App.css';


function Shop() {

  const [cartItems, setCartItems] = useState({
                                              'this': 'that',
                                              'them': 'theirs'});
  const [cartArray, setCartArray] = useState([]);
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log(cartItems)
  // }, [cartItems]);

  function buttonClicked(e) {

    let newItem = e.target.id.toString()
    let obj = {}
    obj[newItem] = 1
    setCartItems(Object.assign(cartItems, obj))
    setCartArray(cartArray.concat(newItem))
    console.log(cartItems)
  }

  function moreButtonClicked(e) {

    let newItem = e.target.id.toString()
    let obj = {}
    obj[newItem] = cartItems[newItem] + 1
    setCartItems(Object.assign(cartItems, obj))
    setCount(count + 1)
  }

  function lessButtonClicked(e) {

    let newItem = e.target.id.toString()
    let obj = {}
    obj[newItem] = cartItems[newItem] - 1
    setCartItems(Object.assign(cartItems, obj))
    setCount(count + 1)
  }

  function deleteButtonClicked(e) {

    let newItem = e.target.id.toString()
    let obj = cartItems
    let array = cartArray
    delete obj[newItem]
    array.splice(array.indexOf(newItem), 1);

    setCartItems(obj)
    setCartArray(array)
    setCount(count + 1)
  }

  function changeInput(e) {

    console.log(e.target.value)

    let newItem = e.target.id.toString()
    let obj = {}
    obj[newItem] = e.target.value
    setCartItems(Object.assign(cartItems, obj))
    setCount(count + 1)
  }

  function submitOrder(e) {

    setCartArray([])
    setCartItems({})
  }



  function DisplayItems() {

    return (

      <div>
        {cartArray.map(item => <div key={item.toString()} className='cartItemContainer'>
          {/* {if (cartItems[item] > 0)} */}
          {item}
          <button onClick={moreButtonClicked} id={item}>+</button>
          <button onClick={lessButtonClicked} id={item}>-</button>
          <button onClick={deleteButtonClicked} id={item}>X</button>
          <input onChange={changeInput} id={item}></input>

          <p>{cartItems[item]}</p>
        </div>)}

      </div>
    )
  }


  return (

    <div className="Shop">
      <div className='products'>
        <h1>Products</h1>
        <div className='itemContainer'>item 1
          <button onClick={buttonClicked} id='item1'>add to cart</button>
        </div>
        <div className='itemContainer'>item 2
          <button onClick={buttonClicked} id='item2'>add to cart</button>
        </div>
      </div>

      <div className='Cart'>

        <h1>Cart</h1>
        <DisplayItems />
      </div>
      <button onClick={submitOrder} id='submitButton'>Submit Order</button>


    </div>
  );
}



export default Shop;

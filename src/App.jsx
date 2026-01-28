import React, { useEffect, useState } from 'react'
import { Header } from './components/header'
import {Footer} from './components/Footer'
import {Guitar} from './components/Guitar'
import {db} from './data/db'

const App = () => {

  function initialCart(){
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

  const [data, setData] = useState(db);
  const [cart, setCart] = useState(initialCart());

  function addToCart(guitar) {
    const itemIndex = cart.findIndex((item)=>guitar.id===item.id)
    
    if (itemIndex===-1){
      guitar.quantity=1;
      setCart([...cart, guitar]);
    } else {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity++;
      setCart(updatedCart);
    }
    
  }

  function removeOneFromCart(guitar) {
    const newCart = cart.map(item => {
      return item.id===guitar.id ? {...item, quantity:item.quantity-1} : item;
    })

    setCart(newCart.filter(item => item.quantity !== 0))
  }

  function removeFromCart(guitar) {
    setCart(cart.filter(item => item.id !== guitar.id));
  }

  function clearCart() {
    setCart([]);
  }

  function calculateTotal() {
    return cart.reduce((total, guitar) => total += guitar.price * guitar.quantity, 0);
  }

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  return (
    <>
      <Header cart={cart} total={calculateTotal()} addToCart={addToCart} removeOne={removeOneFromCart} clear={clearCart} remove={removeFromCart}/>
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>
                <div className="row mt-5">
                    {data.map(guitarra=>{
                        return <Guitar key={guitarra.id} guitar={guitarra} addToCart={addToCart}/>
                    })}
                </div>
        </main>
      <Footer/>
    </>
  )
}

export default App

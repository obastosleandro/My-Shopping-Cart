import React from 'react'
import MyContext from '../context/MyContext';
import { useNavigate } from "react-router-dom";
import '../style/listProducts.css';

export default function Cart() {
  const { cartProducts } = React.useContext(MyContext);
  const navigate = useNavigate();
  const sumProducts = cartProducts.reduce((prev, curr) => prev + Number(curr.price), 0);
  return (
    <main className="container-flex">
      <h1 className="title">My shopping cart</h1>
      <section className="container-flex">
        {cartProducts === null ? <h1>loading...</h1> :
          cartProducts.map(({ image, title, price, id }) =>
            <div key={id} className="item">
              <h1 className="name">{title}</h1>
              <img src={image} alt={title} className="products" />
              <div className="infos">
                <h2 className="price">Price R${price}</h2>
                <button
                  className="button"
                  onClick={() => navigate("/")}>back to shopping</button>
              </div>
            </div>
          )}
      </section>
      <div>
        <section className="container-flex">
          {cartProducts === null ? <h1>loading...</h1> : <h2 className="infos">Total price: {sumProducts}</h2>}
          {sumProducts >= 100 && <h1 className="infos">free shipping released!</h1>}
        </section>
        <button
          className="infos"
          onClick={() => navigate('/cart')}
        >finalize purchase</button>
      </div>
    </main>
  )
}

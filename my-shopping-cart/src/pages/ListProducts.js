import React from 'react'
import { useNavigate } from "react-router-dom";
import MyContext from '../context/MyContext';
import LoadingSpinner from '../components/LoadingSpinner';
import useApi from '../services/api';
import '../style/spinner.css';

export default function ListProducts() {
  const products = useApi();
  const navigate = useNavigate();
  const { cartProducts, setCartProducts } = React.useContext(MyContext);
  return (
    <main>
      <header className="container-flex">
        <h1 className="title">My cart store</h1>
      </header>
      {products === null ? <LoadingSpinner /> :
        products.map(({ image, title, price, id }) =>
          <div key={id}>
            <h1 className="name">{title}</h1>
            <img src={image} alt={title} className="products" />
            <div className="infos">
              <h2 className="price">Price R${price}</h2>
              <button
                className="button"
                onClick={() => {
                  setCartProducts([...cartProducts,
                  {
                    id: id,
                    title: title,
                    price: price,
                    image: image
                  }])
                }}
              >add to cart</button>
              <button
                onClick={() => navigate('/cart')}
              >go to cart</button>
            </div>
          </div>
        )}
    </main>
  )
}

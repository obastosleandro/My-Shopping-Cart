import React from 'react'
import { useNavigate } from 'react-router-dom';
import useApi from '../services/api';

export default function ListProducts() {
  const products = useApi();
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = React.useState([]);
  return (
    <section>
      { products === null ? <h1>carregando...</h1> :
      products.map(({ image, title, price, id }) =>
        <div key={id}>
          <h1>{title}</h1>
          <img src={image} alt={title} />
          <h2>{price}</h2>
          <button
            onClick={() => {
              setCartProducts([...cartProducts,
                {
                  id: id,
                  title: title,
                  image: image,
                  price: price
                }])
            }}
          >
            add to cart
          </button>
          <button
            onClick={() => navigate("/cart")}
          >
            go to cart
          </button>
        </div>
      )}
    </section>
  )
}
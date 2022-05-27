import React from 'react'
import MyContext from '../context/MyContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const {cartProducts} = React.useContext(MyContext);
  const navigate = useNavigate();
  const sumProducts = cartProducts.reduce((prev, curr) => prev + Number(curr.price), 0);
  return (
    <div>
      <h1>Bem vindo ao carrinho de compras!</h1>
      <button onClick={() => navigate("/")}>Voltar as compras</button>
      <section>
        {cartProducts === null ? <h1>carregando...</h1> :
          cartProducts.map(({ image, title, price, id }) =>
            <div key={id}>
              <h1>{title}</h1>
              <img src={image} alt={title} />
              <h2>{price}</h2>
            </div>
          )}
      </section>
      <div>
      <h2>Valor Total:</h2>
        {cartProducts === null
        ? <h1>carregando...</h1>
        : sumProducts}
      </div>
      <div>
        {
          sumProducts >= 100 && <h1>Parabéns, sua compra tem frete grátis !</h1>
        }
      </div>
    </div>
  )
}

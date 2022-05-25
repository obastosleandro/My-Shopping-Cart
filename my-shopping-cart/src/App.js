import useApi from './services/api';

function App() {
  const products = useApi();
  return (
    <section>
      { products === null ? <h1>carregando...</h1> :
      products.map(({ image, title, price }) =>
        <div key={title}>
          <h1>{title}</h1>
          <img src={image} alt={title} />
          <h2>{price}</h2>
        </div>
      )}
    </section>
  );
}

export default App;
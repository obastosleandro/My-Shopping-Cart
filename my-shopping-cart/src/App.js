import ProviderCart from './context/ProviderCart';
import Routes from './routes/Routes';

function App() {
  return (
    <ProviderCart>
      <Routes />
    </ProviderCart>
  );
}

export default App;
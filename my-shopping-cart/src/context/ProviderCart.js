import React from 'react';
import MyContext from './MyContext';

export default function ProviderCart({ children }) {
  const [cartProducts, setCartProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <MyContext.Provider value={{
      cartProducts,
      setCartProducts,
      isLoading,
      setIsLoading
    }}>
      {children}
    </MyContext.Provider>
  )
}

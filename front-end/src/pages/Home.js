import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import socket from '../utils/socket';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
    socket.on('connection', () => {});
  }, []);

  return (
    <div className="container">
      <header>
        <span className="logo">R$</span>
        <h1 className="title">Leilão de centavos</h1>
      </header>
      <div className="content-products">
        {products.map((product) => (
          <Card
            key={ product.id }
            product={ product }
            socket={ socket }
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

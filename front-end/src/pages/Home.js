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
    <div>
      <header>
        <span>R$</span>
        <h1>Leilão de centavos</h1>
      </header>
      {products.map((product) => (
        <Card
          key={ product.id }
          product={ product }
          socket={ socket }
        />
      ))}
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from 'react';

function Cart({ product, socket }) {
  const { id, name, price, img } = product;
  const [currentPrice, setCurrentPrice] = useState(price);
  
  const PRICE_MAX = 100;

  useEffect(() => {
    socket.on('updatePrice', ({ id: newId, price: newPrice }) => {
      if (id === newId) {
        setCurrentPrice(newPrice);
      }
    });
  }, [id, socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('bidClient', { id, price: currentPrice });
  };

  return (
    <div>
      <div className="content-name">
        <p>{ name }</p>
      </div>
      <div className="content-img">
        <img src={ img } alt="test" />
      </div>
      <div className="content-price">
        <span>{ `R$ ${currentPrice},00` }</span>
      </div>
      <div className="content-btn">
        <button
          onClick={ handleSubmit }
          disabled={ currentPrice >= PRICE_MAX }
        >
          { currentPrice >= PRICE_MAX ? 'Produto arrematado!!' : 'Dar um lance!' }
        </button>
      </div>
    </div>
  );
}

export default Cart;
import React, { useState, useEffect } from 'react';
import db from './data/db.json';
import { bulkPurchases } from './Utils/BulkPurchase';
import { filter } from './Utils/filter';
import { voucherPromotion } from './Utils/voucherPromotion';

function App() {
  const [total, setTotal] = useState(0); //Creamos un estado que almacena el total de la cuenta
  const [shoppingcart, setShoppingCart] = useState([]); //almacenamos los items del carrito

  useEffect(() => {
    const vouchers = filter(shoppingcart, 'VOUCHER'); //Bucamos dentro del carro todos los VOUCHERS
    const tshirts = filter(shoppingcart, 'TSHIRT'); //Buscamos dentro del carro todos los TSHIRT
    const mugs = filter(shoppingcart, 'MUG'); //Buscamos dentro del carro los MUG

    let totalMugsPrice = 0; //Declaramos he inicializamos el precio de los mugs

    //Recorremos todos los mugs y acumulamos el precio total
    mugs.forEach(mug => {
      totalMugsPrice += mug.price;
    });
    const totalTshirts = bulkPurchases(tshirts); //Llamamos la funcion de las compras a granel
    const totalVouchers = voucherPromotion(vouchers); //Llamamos la funcion de la promocion Vouchers

    setTotal(totalMugsPrice + totalTshirts + totalVouchers); //Lo sumamos todo y lo agregamos al estado total
  }, [shoppingcart]); //Cuando el Carro cambie se ejecutara este useEffect

  //Funcion para agregar un producto al carro segun el codigo escaneado
  const scan = sku => {
    //Obtenemos la posicion del producto escaneado en el array de la base de datos
    const index = db.map(product => product.code).indexOf(sku);
    //Editamos el carro haciendo una destructuracion del carro actual y agregamos el carro al final
    setShoppingCart([...shoppingcart, db[index]]);
  };

  return (
    <div className="min-h-screen bg-gray-200 px-4">
      <h1>Cofi- Test</h1>

      <div className="grid grid-cols-3 gap-4">
        {db.map((product, index) => (
          <button key={index} className="bg-blue-500 text-white py-4 rounded-2xl" onClick={() => scan(product.code)}>
            {product.name} - {product.price}€
          </button>
        ))}
      </div>

      <h2>total {total}€</h2>
      <ul>
        {shoppingcart.map((item, index) => (
          <li key={index}>
            {index + 1} - {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

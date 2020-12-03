import React, { useState, useEffect } from 'react';
import db from './data/db.json';
import { bulkPurchases } from './Utils/BulkPurchase';
import { filter } from './Utils/filter';
import { voucherPromotion } from './Utils/voucherPromotion';

function App() {
  const [total, setTotal] = useState(0);
  const [shoppingcart, setShoppingCart] = useState([]);

  useEffect(() => {
    const vouchers = filter(shoppingcart, 'VOUCHER');
    const tshirts = filter(shoppingcart, 'TSHIRT');
    const mugs = filter(shoppingcart, 'MUG');

    let totalMugsPrice = 0;
    mugs.forEach(mug => {
      totalMugsPrice += mug.price;
    });
    const totalTshirts = bulkPurchases(tshirts);
    const totalVouchers = voucherPromotion(vouchers);

    setTotal(totalMugsPrice + totalTshirts + totalVouchers);
  }, [shoppingcart]);

  const scan = sku => {
    const index = db.map(product => product.code).indexOf(sku);
    setShoppingCart([...shoppingcart, db[index]]);
  };

  return (
    <div className="min-h-screen bg-gray-200 px-10">
      <h1>Cofi- Test</h1>

      <div className="grid">
        {db.map((product, index) => (
          <button key={index} className="bg-blue-500 text-white" onClick={() => scan(product.code)}>
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

const bulkPurchases = tshirts => {
  let totalPrice = 0;

  tshirts.forEach(tshirt => (totalPrice += tshirt.price));
  if (tshirts.length < 3) {
    return totalPrice;
  } else {
    const discount = (totalPrice * 5) / 100;
    return (totalPrice = totalPrice - discount);
  }
};

export { bulkPurchases };

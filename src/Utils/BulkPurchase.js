const bulkPurchases = tshirts => {
  let totalPrice = 0; //Declaramos he inicializamos el precio total de las tshirts

  //Recoremos todas las tshirts y vamos sumando el precio total
  tshirts.forEach(tshirt => (totalPrice += tshirt.price));
  //Si es menor a 3 no aplicamos descuento sino que retornamos el valor normal
  if (tshirts.length < 3) {
    return totalPrice;
  } else {
    const discount = (totalPrice * 5) / 100; //De los contrario se aplica el descuento del 5%
    return (totalPrice = totalPrice - discount); // retornamos el total con descuento.
  }
};

export { bulkPurchases };

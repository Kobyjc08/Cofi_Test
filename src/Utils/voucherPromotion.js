const voucherPromotion = vouchers => {
  //Si hay menos de 2 Vouchers entra en la siguiente logica
  if (vouchers.length < 2) {
    if (vouchers.length !== 0) {
      //Si hay en el array algun Voucher sumaremos su precio.
      return vouchers[0].price;
    } else {
      return 0; //Si no hay ningun Voucher el precio sera 0 porque no existe item.
    }
  } else if (vouchers.length % 2 === 0) {
    //Si el numero de Vouchers es par aplicaremos el descuento del 2 x 1
    return (vouchers.length / 2) * vouchers[0].price;
  } else {
    // si el numero de Vouchers es impar solo aplicaremos descuento a los pares y sumaremos el precio del voucher no par.
    return ((vouchers.length - 1) / 2 + 1) * vouchers[0].price;
  }
};
export { voucherPromotion };

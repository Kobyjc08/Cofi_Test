const voucherPromotion = vouchers => {
  let totalPrice = 0;
  vouchers.forEach(voucher => {
    totalPrice += voucher.price;
  });
  if (vouchers.length < 2) {
    return totalPrice;
  } else if (vouchers.length % 2 === 0) {
    return (totalPrice = totalPrice / 2);
  } else {
    let vouchersWithDiscount = vouchers;
    vouchersWithDiscount.splice(-1, 1);
    console.log(vouchersWithDiscount);
    vouchersWithDiscount.forEach(voucher => {
      totalPrice += voucher.price;
    });
    return (totalPrice = totalPrice / 2 + vouchers[0].price);
  }
};
export { voucherPromotion };

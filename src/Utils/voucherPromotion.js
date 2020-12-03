const voucherPromotion = vouchers => {
  if (vouchers.length < 2) {
    if (vouchers.length !== 0) {
      return vouchers[0].price;
    } else {
      return 0;
    }
  } else if (vouchers.length % 2 === 0) {
    return (vouchers.length / 2) * vouchers[0].price;
  } else {
    return ((vouchers.length - 1) / 2 + 1) * vouchers[0].price;
  }
};
export { voucherPromotion };

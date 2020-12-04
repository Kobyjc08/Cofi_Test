//con esta funcion de filtro extraemos del carro de compras el producto escaneado para poder manipular los totales y aplicar los descuentos respectivos
const filter = (shoppingCartItems, code) => shoppingCartItems.filter(product => product.code === code);
export { filter };

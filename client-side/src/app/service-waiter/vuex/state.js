export default {

  tables: {
    1: { text: 'Table 001', value: '1', payments: [] },
    2: { text: 'Table 002', value: '2', payments: [] },
    3: { text: 'Table 003', value: '3', payments: [] },
    4: { text: 'Table 004', value: '4', payments: [] },
    5: { text: 'Table 005', value: '5', payments: [] }
  },

  table_products: {
    0: { products: [] },
    1: { products: [
        { productId: 1, paid: 0.0 },
        { productId: 2, paid: 0.0 },
        { productId: 3, paid: 0.0 },
        { productId: 4, paid: 0.0 }
    ] },
    2: { products: [
        { productId: 5, paid: 1.0 },
        { productId: 6, paid: 0.0 },
        { productId: 7, paid: 0.0 },
        { productId: 8, paid: 0.0 }
    ] },
    3: { products: [
        { productId: 9, paid: 2.0 },
        { productId: 10, paid: 0.0 },
        { productId: 11, paid: 0.0 },
        { productId: 12, paid: 0.0 }
    ] },
    4: { products: [
        { productId: 13, paid: 0.0 },
        { productId: 14, paid: 0.0 },
        { productId: 15, paid: 0.0 },
        { productId: 16, paid: 0.0 },
        { productId: 17, paid: 0.0 }
    ] },
    5: { products: [
        { productId: 18, paid: 0.0 }
    ] }
  },

  products: {
    1: { name: 'Churras', price: 60.00 },
    2: { name: 'Tapioca', price: 10.00 },
    3: { name: 'Feijoada', price: 36.90 },
    4: { name: 'Água', price: 5.00 },
    5: { name: 'Feijoada', price: 36.90 },
    6: { name: 'Sanduba', price: 5.50 },
    7: { name: 'Batata', price: 20.00 },
    8: { name: 'Churras', price: 60.00 },
    9: { name: 'Coca', price: 5.50 },
    10: { name: 'Batata', price: 22.00 },
    11: { name: 'Churras', price: 60.00 },
    12: { name: 'Tapioca', price: 10.00 },
    13: { name: 'Cerveja', price: 8.00 },
    14: { name: 'Camarão', price: 80.02 },
    15: { name: 'Ovo', price: 2.00 },
    16: { name: 'Guaraná', price: 5.00 },
    17: { name: 'Água', price: 5.00 },
    18: { name: 'Batata', price: 22.00 }
  }
}

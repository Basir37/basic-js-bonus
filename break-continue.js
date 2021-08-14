const products = [
    { name: 'macbook pro 16', price: 12000 },
    { name: 'samsung s20', price: 21000 },
    { name: 'lenovo y10', price: 15000 },
    { name: 'galaxy s5', price: 11000 },
    { name: 'Xaomi note 10', price: 2000 },
    { name: 'realme x20', price: 8000 },
];

// for (const product of products) {
//     if (product.price < 10000) {
//         break;
//     }
//     console.log(product);
// }

for (const product of products) {
    if (product.price < 10000) {
        continue;
    }
    console.log(product);
}
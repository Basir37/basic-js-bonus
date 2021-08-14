const products = [
    { name: 'macbook pro 16', price: 12000 },
    { name: 'samsung s20', price: 21000 },
    { name: 'lenovo y10', price: 15000 },
    { name: 'galaxy s5', price: 11000 },
    { name: 'Xaomi note 10', price: 2000 },
    { name: 'realme x20', price: 8000 },
];

function searchProducts(products, searchText) {
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) !== -1) {
            matched.push(product);
        }
    }
    return matched;
}
const matched = searchProducts(products, 'a');
console.log(matched);

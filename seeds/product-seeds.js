const { Product } = require('../models');

const DataProduct = [
    {
        product_name: 'Warren Lotas T-Shirt',
        price: 99.99,
        stock: 100,
        category_id: 1,
    },
    {
        product_name: 'Stussy x Nike Air Zoom',
        price: 120.99,
        stock: 50,
        category_id: 5,
    },
    {
        product_name: 'Kill The Hype Hat',
        price: 99.99,
        stock: 10,
        category_id: 4,

    },
    {
        product_name: 'John Coltrane Vinyl Record',
        price: 12.99,
        stock: 50,
        category_id: 3,
    },
    {
        product_name: 'John Elliot Shorts',
        price: 99.99,
        stock: 22,
        category_id: 2,
    },
];

const seedProducts = () => Product.bulkCreate(DataProduct);
module.exports = seedProducts;
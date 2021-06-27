// import models
const Product = require('./product');
const Category = require('./catergory')
const Tag = require('./tag');
const productTag = require('./productTag');

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id',
});

// Products belongToMant Tags
Product.belongsToMany(Tag, {
    through: productTag,
    foreignKey: 'product_id',
});

// Tags belongToMant Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: productTag,
    foreignKey: 'tag_id',
});

module.exports = {
    Product,
    Category,
    Tag,
    productTag,
}
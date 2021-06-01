const defineProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    img: DataTypes.STRING,
  }, { timestamps: false });

  return Product;
};

module.exports = defineProductModel;
const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-commerce");
  const ProductSchema = new mongoose.Schema({
    name: String,
    price:Number,
    brand:String,
    Category:String,



  });
  const ProductsModel =  mongoose.model('products',ProductSchema)
  let data = new ProductsModel({
    name:'m18',
    price:1200,
    brand:'apple',
    category:'smart-phone'
  })
  let result  = await data.save()
  console.log(result);
};
main()


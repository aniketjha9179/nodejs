const mongoose = require("mongoose");

// Define the ProductSchema outside of the functions
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-commerce");
  const ProductsModel = mongoose.model('products', ProductSchema)
  let data = new ProductsModel({
    name: 'm18',
    price: 1200,
    brand: 'apple',
    category: 'smart-phone',
  });
  let result = await data.save();
  console.log(result);
};

// saveInDB();


const updateInDB = async () => {
  // Use the ProductSchema here
  const Product = mongoose.model('products', ProductSchema);
  let data = await Product.updateOne(
    { name: 'nord3' },
    {
      $set: { price: 10, name:'alu paratha' },
    }
  );
  console.log(data);
};

// updateInDB();


const deleteInDB = async()=>{
  const Product = mongoose.model('products', ProductSchema);
  let data = await Product.deleteOne({name:'iphone15'})
  console.log(data);


}
// deleteInDB()


const FindInDB = async()=>{
  const Product = mongoose.model('products', ProductSchema);
  let data = await Product.find({name:'m18'})
  console.log(data);
}
FindInDB()


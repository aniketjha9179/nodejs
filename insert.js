const dbConnect = require("./mongodb");
const insert = async () => {
  const db = await dbConnect();
  // to add one data we use insertone method 

  //  const result = await db.insertOne
  // to add multiple we use [] and insertMany method
  const result = await db.insertMany([
    {
      name: "nord5",
      brand: "onePlus",
      price: 22000,
      category: "smart-phone",
    },
    {
        name: "nord3",
        brand: "onePlus",
        price: 12000,
        category: "smart-phone",
    }, {
        name: "nord2",
        brand: "onePlus",
        price: 29000,
        category: "smart-phone",
    }

  ]);
  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insert();

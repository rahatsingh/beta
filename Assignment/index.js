const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required:[true, "why not name"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const mango = new Fruit ({
    name: "Mango",
    rating: 10,
    review: "King of Fruit"
})

Fruit.create(mango)
.then((result) => {
    console.log("Successfully saved the fruit to fruitsDB");
})
.catch((err) => {
    console.log(err);
})




// mango.save();





// Fruit.updateOne({name: "Sumit"}, {favouriteFruit: pineapple}, function(err){
//     if (err){
//         console.log(err);
//     } else {
//         console.log("Successfully updated");
//     }
// })

// const peersonSchema = new mongoose.Schema ({
//     name: String,
//     age: Number,
//     favouriteFruit: fruitSchema
// })



// const Person = mongoose.model("Person", peersonSchema);

// const person = new Person ({
//     name: "Sumit",
//     age: 18
// })

// person.save()

// const mango = new Fruit ({
//     name: "mango",
//     rating: 10,
//     review: "king"
// })

// const chiku = new Fruit ({
//     name: "chiku",
//     rating: 4,
//     review: "ok ok"
// }) 




// Fruit.find(function(err, fruits){
//     if(err) {
//         console.log(err);
//     } else {

//         // mongoose.connection.close();

//         fruits.forEach(function(fruit){
//             console.log(fruit.name)
//         })
//     }
// }) 




// Fruit.deleteOne({_id: "633efe7cdb430f53863c0544"}, function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Deleted Successfully");
//     }
// })
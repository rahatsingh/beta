const Joi=require('joi');
const express = require('express');
const app = express();
app.use(express.json());

const books=[
{id:1,name:"Web"},
{id:2,name:"Inp"},
{id:3,name:"AI"},
]

//READ Request Handlers
app.get('/', (req, res) => {
res.send('Hello World!!');
});
app.get('/api/books', (req, res)=>{
res.send(books);

});
//get single book
app.get('/api/books/:id', (req, res) =>{
    const book = books.find(b =>
b.id===parseInt(req.params.id));
    if(!book) res.status(404).send('the book with id notfound');
    res.send(book);
});

//post request
app.post('/api/books', (req, res) =>{
    if(!req.body.name || req.body.name.length <3)
    {
        res.status(400).send('name is required');
        return;
    }
    const book = {
    id:books.length +1,//to add next id to new book entry
    name:req.body.name
    };
    
    books.push(book);
    res.send(book);
});


//update request
app.put('/api/books/:id',(req,res)=>{

    const book = books.find(b =>
    b.id===parseInt(req.params.id));
    if(!book) res.status(404).send('the book with id notfound');
    if(!req.body.name || req.body.name.length <3)
    {
        res.status(400).send('name is required');
        return;
    }
    book.name=req.body.name;
    res.send(book);
    });

//setting up dynamic port
const port=process.env.PORT || 3000;
app.listen(port, ()=>console.log(`listening on port ${port}`));
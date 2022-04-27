const main = require('./helpers/main');

let app = main();

app.get('/',(req,res)=>{
    res.writeend('1')
})
app.listen(5000,()=>{
    console.log("aapp listen");
})
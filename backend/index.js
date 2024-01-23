let express=require("express")
let app=express()
let cors=require("cors")
app.use(cors())
let bodyParser=require("body-parser")
app.use(bodyParser.json())
let mongoose=require("mongoose")
let {Schema}=require("mongoose")
require("dotenv").config()
let port=process.env.PORT;


let fashionSchema=new Schema({
    name:String,
    price:Number,
    img:String
});
let Fashion =mongoose.model("fashion",fashionSchema)
app.get("/api/fashion",async(req,res)=>{
    let fashion= await Fashion.find()
    if (fashion.length>0) {
        res.send(fashion)
        
    }
    else{
        res.send("data not found")
    }
})
app.get("/api/fashion/:id",async(req,res)=>{
    let {id}=req.params
    let finded=await Fashion.findById(id)
    if (finded) {
        res.send(finded)
        
    }
    else("data not found")
})
app.delete("/api/fashion/:id",async(req,res)=>{
    let {id}=req.params
    let deleted=await Fashion.findByIdAndDelete(id)
    if (deleted) {
        res.send(deleted)
        
    }
    else{
        res.send("data not found")
    }
})
app.post("/api/fashion",async(req,res)=>{
    let {name,price,img}=req.body
    let newData={}
    if (name) {
        newData.name=name
        
    }
    if (price) {
        newData.price=price
        
    }
    if (img) {
        newData.img=img
        
    }
    const newfashion=await Fashion(newData)
    const savafashion=await newfashion.save()
    res.send(savafashion)
})


app.listen(port,()=>{
    console.log(`example listenning on port ${port}`)
})
mongoose.connect("mongodb+srv://aydan:aydan123@app.5ibbxcd.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Connect!"))
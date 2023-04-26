require('dotenv').config()
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('database connected')
}).catch((err)=>{
    console.log(err)
})

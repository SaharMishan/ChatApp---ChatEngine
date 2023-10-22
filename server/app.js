const express = require('express')
const axios = require('axios')
const dotenv =  require('dotenv').config()
const cors = require('cors')
const PORT = 8000 || process.env.PORT
const app = express()
app.use(express.json())
app.use(cors({origin: true}))


app.post("/auth", async (req, res) => {
    const {username} = req.body;
    const requestOptions = {headers:{
        "Private-Key": process.env.PRIVATE_KEY
    }}
    
try{
    const response  = await axios.put("https://api.chatengine.io/users",{
        username: username,
        secret: username,
        first_name: username,
        
    },requestOptions)
    return res.status(response.status).json(response.data)

}catch(err){
    return res.status(response.err.status).send({message: response.err.message})
}

  
})


app.listen(PORT, ()=> console.log(`server running on port: ${process.env.PORT}`))
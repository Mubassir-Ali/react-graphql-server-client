const express =require("express")
const {graphqlHTTP}=require("express-graphql")
const schema = require("./Schema/schema")
const mongoose =require('mongoose')
const cors =require('cors')

const app =express()

// allow cross-origin request
app.use(cors())



// connect to the mlab database
mongoose.connect('mongodb+srv://mubassir:test123456@cluster0.lsili.mongodb.net/gql-mongoDB?retryWrites=true&w=majority')
mongoose.connection.once('open',()=>{
    console.log('connected to database')
})




app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(4000,()=>{
    console.log("now listning for request on port 4000")
})

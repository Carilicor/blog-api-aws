import express  from "express";
import cors from "cors";
// import { MongoClient } from "mongodb";
import "dotenv/config"

import { posts } from './mongoConnect.js'
import { addPost } from "./posts.js"

const app = express()
app.use(cors())
app.use(express.json())

// const client = new MongoClient(process.env.MONGO_URI)
// const database = client.db('blog')
// const posts = database.collection('posts')

// client.connect()
// console.log('connect to mongo')

app.listen(process.env.PORT, () => console.log(`api running on port ${process.env.PORT}`))


// post - add one post item
// ---- author, date, text 
// app.post('/', async (req, res) => {
//     // const newPost = {author: "Cari", date: "2022-21-22", text: "lorem lorem here"}
//     // console.log('req.body ->', req.body)
    
//     await posts.insertOne(req.body)
//     res.send("item was added")
// })
    
app.post('/', addPost)

// get - to get all post 
app.get('/', async (req, res) => {
    const allPosts = await posts.find().toArray()
    res.send(allPosts)
})
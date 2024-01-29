import mongoose from "mongoose"
import PostMessage from "../models/PostMessage.js"

const getPost=async(req,res)=>{
    try {
        const postmessageData=await PostMessage.find()
    console.log(postmessageData)
   res.status(200).json(postmessageData)
        
    } catch (error) {
        res.status(404).json(error.message)
    }
    
}
const createPost =async(req,res)=>{
    let data=req.body
    console.log(data);
    const newPost=new PostMessage(data)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(404).json(error.message)
    }

    
}

export const updatePost=async(req,res)=>{
    let {id:_id}=req.params
    const post=req.body
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with this id")
  let updatedpost=await  PostMessage.findByIdAndUpdate(_id,post,{new:true})
res.json(updatedpost)
}
export const deletePost=async(req,res)=>{
    // let {id:_id}=req.params
    
     
}

export default{
    getPost,
    createPost,
    updatePost,
    deletePost
}
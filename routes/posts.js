import express from 'express'
import postController from '../controllers/posts.js'

const router=express.Router()

router.get('/',postController.getPost)
router.post('/',postController.createPost)
router.patch("/:id",postController.updatePost)
router.delete("/:id",postController.deletePost)
router.patch("/:id/likepost" ,postController.likePost)

export default router 
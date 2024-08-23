const express = require("express");
const app = express();
const Joi = require('joi');
const Post = require('../models/Post');


const router = express.Router();

// Input validation schema
const postSchema = Joi.object({
    title: Joi.string().min(3).max(255).required(),
    content: Joi.string().min(10).required()
});

// GET /posts (List all posts)
router.get('/', async (req, res, next) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        next(err);
    }
});

// GET /posts/:id (Get a specific post)
router.get('/:id', async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
    } catch (err) {
        next(err);
    }
});

// POST /posts (Create a new post)
router.post('/', async (req, res, next) => {
    try {
        const { error } = postSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const post = new Post({
            title: req.body.title,
            content: req.body.content
        });

        await post.save();
        res.status(201).json(post);
    } catch (err) {
        next(err);
    }
});

// PUT /posts/:id (Update a post)
router.put('/:id', async (req, res, next) => {
    try {
        const { error } = postSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!post) return res.status(404).json({ message: 'Post not found' });

        res.json(post);
    } catch (err) {
        next(err);
    }
});

// DELETE /posts/:id (Delete a post)
router.delete('/:id', async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        res.json({ message: 'Post deleted successfully' });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
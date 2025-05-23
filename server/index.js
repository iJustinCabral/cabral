import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';
import slugify from 'slugify';

const app = express();
const PORT = 3001;
const BLOG_DIR = path.join(process.cwd(), '../blog-content');

// Middleware
app.use(cors());
app.use(express.json());

// Ensure blog directory exists
async function ensureBlogDir() {
  try {
    await fs.access(BLOG_DIR);
  } catch (error) {
    await fs.mkdir(BLOG_DIR, { recursive: true });
  }
}

// Helper function to generate filename from title
function generateSlug(title) {
  return slugify(title, { lower: true, strict: true });
}

// Helper function to create frontmatter
function createFrontmatter(data) {
  return `---
title: ${data.title}
date: ${data.date || new Date().toISOString()}
author: ${data.author || 'Justin Cabral'}
slug: ${data.slug}
excerpt: ${data.excerpt || ''}
published: ${data.published !== false}
---

${data.content}`;
}

// GET /api/posts - Get all blog posts
app.get('/api/posts', async (req, res) => {
  try {
    const files = await fs.readdir(BLOG_DIR);
    const mdFiles = files.filter(file => file.endsWith('.md'));
    
    const posts = await Promise.all(
      mdFiles.map(async (file) => {
        const filePath = path.join(BLOG_DIR, file);
        const fileContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        
        return {
          slug: data.slug || path.basename(file, '.md'),
          title: data.title || 'Untitled',
          date: data.date,
          author: data.author,
          excerpt: data.excerpt,
          published: data.published !== false,
          contentPreview: content.substring(0, 200) + '...'
        };
      })
    );
    
    // Sort by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// GET /api/posts/:slug - Get specific blog post
app.get('/api/posts/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    const post = {
      slug: data.slug || slug,
      title: data.title || 'Untitled',
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      published: data.published !== false,
      content: marked(content),
      rawContent: content
    };
    
    res.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    if (error.code === 'ENOENT') {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.status(500).json({ error: 'Failed to fetch post' });
    }
  }
});

// POST /api/posts - Create new blog post
app.post('/api/posts', async (req, res) => {
  try {
    const { title, content, excerpt, author, published } = req.body;
    
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }
    
    const slug = generateSlug(title);
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    
    // Check if post already exists
    try {
      await fs.access(filePath);
      return res.status(409).json({ error: 'Post with this title already exists' });
    } catch (error) {
      // File doesn't exist, which is what we want
    }
    
    const postData = {
      title,
      content,
      excerpt,
      author,
      published,
      slug,
      date: new Date().toISOString()
    };
    
    const fileContent = createFrontmatter(postData);
    await fs.writeFile(filePath, fileContent);
    
    res.status(201).json({ message: 'Post created successfully', slug });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// PUT /api/posts/:slug - Update existing blog post
app.put('/api/posts/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const { title, content, excerpt, author, published } = req.body;
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    
    // Check if post exists
    try {
      await fs.access(filePath);
    } catch (error) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    // Read existing post to preserve date
    const existingContent = await fs.readFile(filePath, 'utf8');
    const { data: existingData } = matter(existingContent);
    
    const postData = {
      title: title || existingData.title,
      content: content || existingData.content,
      excerpt: excerpt || existingData.excerpt,
      author: author || existingData.author,
      published: published !== undefined ? published : existingData.published,
      slug,
      date: existingData.date || new Date().toISOString()
    };
    
    const fileContent = createFrontmatter(postData);
    await fs.writeFile(filePath, fileContent);
    
    res.json({ message: 'Post updated successfully' });
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Failed to update post' });
  }
});

// DELETE /api/posts/:slug - Delete blog post
app.delete('/api/posts/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    
    await fs.unlink(filePath);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    if (error.code === 'ENOENT') {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.status(500).json({ error: 'Failed to delete post' });
    }
  }
});

// Initialize and start server
async function startServer() {
  await ensureBlogDir();
  app.listen(PORT, () => {
    console.log(`Blog server running on http://localhost:${PORT}`);
    console.log(`Blog content directory: ${BLOG_DIR}`);
  });
}

startServer();
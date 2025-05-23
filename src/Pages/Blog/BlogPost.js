import React, { useState, useEffect } from 'react'
import './Blog.css'
import NavBar from '../../components/NavBar'
import { useParams, Link } from 'react-router-dom'
import { API_URL } from '../../config'

const BlogPost = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPost()
  }, [slug]) // eslint-disable-line react-hooks/exhaustive-deps

  const fetchPost = async () => {
    try {
      const response = await fetch(`${API_URL}/api/posts/${slug}`)
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Post not found')
        }
        throw new Error('Failed to fetch post')
      }
      const data = await response.json()
      setPost(data)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <body className="">
        <div className="container">
          <NavBar />
          <hr />
          <div className="loading">Loading post...</div>
        </div>
      </body>
    )
  }

  if (error) {
    return (
      <body className="">
        <div className="container">
          <NavBar />
          <hr />
          <div className="error">Error: {error}</div>
          <div className="back-link">
            <Link to="/">← Back to Home</Link>
          </div>
        </div>
      </body>
    )
  }

  if (!post || !post.published) {
    return (
      <body className="">
        <div className="container">
          <NavBar />
          <hr />
          <div className="error">Post not found</div>
          <div className="back-link">
            <Link to="/">← Back to Home</Link>
          </div>
        </div>
      </body>
    )
  }

  return (
    <body className="">
      <div className="container">
        <NavBar />
        <hr />
        
        <div className="back-link">
          <Link to="/">← Back to Home</Link>
        </div>

        <article className="blog-post">
          <header className="post-header">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <span className="post-date">{formatDate(post.date)}</span>
              {post.author && <span className="post-author"> • by {post.author}</span>}
            </div>
          </header>

          <div 
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </body>
  )
}

export default BlogPost
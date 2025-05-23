import React, { useState, useEffect } from 'react'
import './Blog.css'
import NavBar from '../../components/NavBar'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_URL}/api/posts`)
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }
      const data = await response.json()
      setPosts(data.filter(post => post.published))
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
          <div className="ctitle">Latest Posts</div>
          <div className="loading">Loading posts...</div>
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
          <div className="ctitle">Latest Posts</div>
          <div className="error">Error loading posts: {error}</div>
        </div>
      </body>
    )
  }

  return (
    <body className="">
      <div className="container">
        <NavBar />
        <hr />
        <div className="ctitle">Latest Posts</div>
        
        {posts.length === 0 ? (
          <div className="no-posts">No blog posts yet. Check back soon!</div>
        ) : (
          <div className="posts">
            {posts.map((post) => (
              <div key={post.slug} className="post-preview">
                <div className="post-meta">
                  <span className="post-date">{formatDate(post.date)}</span>
                </div>
                <h3 className="post-title">
                  <Link to={`/${post.slug}`}>{post.title}</Link>
                </h3>
                {post.excerpt && (
                  <p className="post-excerpt">{post.excerpt}</p>
                )}
                <div className="post-read-more">
                  <Link to={`/${post.slug}`}>Read more →</Link>
                </div>
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    </body>
  )
}

export default Blog
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
      const publishedPosts = data.filter(post => post.published)
      
      // Fetch full content for each post
      const fullPosts = await Promise.all(
        publishedPosts.map(async (post) => {
          try {
            const postResponse = await fetch(`${API_URL}/api/posts/${post.slug}`)
            if (postResponse.ok) {
              const fullPost = await postResponse.json()
              return fullPost
            }
            return post // fallback to preview if full post fails
          } catch (error) {
            return post // fallback to preview if full post fails
          }
        })
      )
      
      setPosts(fullPosts)
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
          <div className="sponsor-banner">
          <div className="sponsor-content">
            <h3>📢 Sponsor this blog</h3>
            <p>Reach developers and tech enthusiasts</p>
            <a href="mailto:hello@justincabral.com?subject=Blog Sponsorship Inquiry" className="sponsor-button">
              Get in touch
            </a>
          </div>
        </div>
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
          <div className="sponsor-banner">
          <div className="sponsor-content">
            <h3>📢 Sponsor this blog</h3>
            <p>Reach developers and tech enthusiasts</p>
            <a href="mailto:hello@justincabral.com?subject=Blog Sponsorship Inquiry" className="sponsor-button">
              Get in touch
            </a>
          </div>
        </div>
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
        <div className="sponsor-banner">
          <div className="sponsor-content">
            <h3>📢 Sponsor this blog</h3>
            <p>Reach developers and tech enthusiasts</p>
            <a href="mailto:hello@justincabral.com?subject=Blog Sponsorship Inquiry" className="sponsor-button">
              Get in touch
            </a>
          </div>
        </div>
        
        {posts.length === 0 ? (
          <div className="no-posts">No blog posts yet. Check back soon!</div>
        ) : (
          <div className="posts">
            {posts.map((post) => (
              <article key={post.slug} className="full-post">
                <header className="post-header">
                  <h2 className="post-title">
                    <Link to={`/${post.slug}`}>{post.title}</Link>
                  </h2>
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
            ))}
          </div>
        )}
      </div>
    </body>
  )
}

export default Blog
import React, { useState, useEffect } from 'react'
import './Admin.css'
import NavBar from '../../components/NavBar'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config'

const Admin = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')

  // Simple password check - in production, use proper authentication
  const ADMIN_PASSWORD = 'blog2025'

  useEffect(() => {
    const savedAuth = localStorage.getItem('blogAdminAuth')
    if (savedAuth === 'true') {
      setIsAuthenticated(true)
      fetchPosts()
    } else {
      setLoading(false)
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem('blogAdminAuth', 'true')
      fetchPosts()
    } else {
      setError('Invalid password')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('blogAdminAuth')
    setPassword('')
  }

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_URL}/api/posts`)
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }
      const data = await response.json()
      setPosts(data)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const deletePost = async (slug) => {
    if (!window.confirm('Are you sure you want to delete this post?')) {
      return
    }

    try {
      const response = await fetch(`${API_URL}/api/posts/${slug}`, {
        method: 'DELETE'
      })
      
      if (!response.ok) {
        throw new Error('Failed to delete post')
      }
      
      // Refresh posts list
      fetchPosts()
    } catch (err) {
      setError(err.message)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (!isAuthenticated) {
    return (
      <body className="">
        <div className="container">
          <NavBar />
          <hr />
          <div className="ctitle">Admin Login</div>
          
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </body>
    )
  }

  if (loading) {
    return (
      <body className="">
        <div className="container">
          <NavBar />
          <hr />
          <div className="ctitle">Admin Dashboard</div>
          <div className="loading">Loading posts...</div>
        </div>
      </body>
    )
  }

  return (
    <body className="">
      <div className="container">
        <NavBar />
        <hr />
        
        <div className="admin-header">
          <div className="ctitle">Admin Dashboard</div>
          <div className="admin-actions">
            <Link to="/admin/new" className="btn btn-primary">New Post</Link>
            <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
          </div>
        </div>

        {error && <div className="error">{error}</div>}

        <div className="posts-table">
          <div className="table-header">
            <span>Title</span>
            <span>Status</span>
            <span>Date</span>
            <span>Actions</span>
          </div>
          
          {posts.map((post) => (
            <div key={post.slug} className="table-row">
              <div className="post-title">
                <Link to={`/${post.slug}`}>{post.title}</Link>
              </div>
              <div className="post-status">
                <span className={`status ${post.published ? 'published' : 'draft'}`}>
                  {post.published ? 'Published' : 'Draft'}
                </span>
              </div>
              <div className="post-date">{formatDate(post.date)}</div>
              <div className="post-actions">
                <Link to={`/admin/edit/${post.slug}`} className="btn btn-small">Edit</Link>
                <button 
                  onClick={() => deletePost(post.slug)} 
                  className="btn btn-small btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          
          {posts.length === 0 && (
            <div className="no-posts">No posts yet. Create your first post!</div>
          )}
        </div>
      </div>
    </body>
  )
}

export default Admin
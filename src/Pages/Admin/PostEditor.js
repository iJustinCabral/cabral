import React, { useState, useEffect } from 'react'
import './Admin.css'
import NavBar from '../../components/NavBar'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { API_URL } from '../../config'

const PostEditor = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const isEditMode = Boolean(slug)
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    published: true
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    // Check authentication
    const savedAuth = localStorage.getItem('blogAdminAuth')
    if (savedAuth !== 'true') {
      navigate('/admin')
      return
    }

    if (isEditMode) {
      fetchPost()
    }
  }, [slug, isEditMode, navigate])

  const fetchPost = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/api/posts/${slug}`)
      if (!response.ok) {
        throw new Error('Failed to fetch post')
      }
      const post = await response.json()
      setFormData({
        title: post.title,
        content: post.rawContent,
        excerpt: post.excerpt || '',
        published: post.published
      })
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError(null)

    try {
      const url = isEditMode 
        ? `${API_URL}/api/posts/${slug}`
        : `${API_URL}/api/posts`
      
      const method = isEditMode ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to save post')
      }

      const result = await response.json()
      
      // Redirect to admin or the new post
      if (isEditMode) {
        navigate('/admin')
      } else {
        navigate(`/admin`)
      }
    } catch (err) {
      setError(err.message)
      setSaving(false)
    }
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

  return (
    <body className="">
      <div className="container">
        <NavBar />
        <hr />
        
        <div className="admin-header">
          <div className="ctitle">
            {isEditMode ? 'Edit Post' : 'New Post'}
          </div>
          <div className="admin-actions">
            <Link to="/admin" className="btn btn-secondary">Back to Admin</Link>
          </div>
        </div>

        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit} className="post-form">
          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="Enter post title..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="excerpt">Excerpt</label>
            <input
              type="text"
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              placeholder="Brief description of the post..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content *</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
              rows="20"
              placeholder="Write your post content in Markdown..."
            />
            <div className="form-help">
              Supports Markdown: **bold**, *italic*, `code`, # headings, [links](url), etc.
            </div>
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="published"
                checked={formData.published}
                onChange={handleInputChange}
              />
              Publish immediately
            </label>
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={saving}
            >
              {saving ? 'Saving...' : (isEditMode ? 'Update Post' : 'Create Post')}
            </button>
            <Link to="/admin" className="btn btn-secondary">Cancel</Link>
          </div>
        </form>
      </div>
    </body>
  )
}

export default PostEditor
// API Configuration
const config = {
  development: {
    apiUrl: 'http://localhost:3001'
  },
  production: {
    apiUrl: '' // Use relative URLs in production (proxied by nginx)
  }
}

const environment = process.env.NODE_ENV || 'development'
export const API_URL = config[environment].apiUrl
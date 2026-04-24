{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "functions": {
    "api/submit-form.js": {
      "runtime": "@vercel/node"
    }
  },
  "routes": [
    {
      "src": "/api/submit-form",
      "dest": "/api/submit-form.js"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}

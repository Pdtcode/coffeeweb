/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains:[
      'images.unsplash.com'
    ]
  },
  server: {
    // This ensures that the server-side version of the nodemailer module is used
    externals: ['nodemailer'],
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}
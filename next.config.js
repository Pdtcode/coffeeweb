

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
}
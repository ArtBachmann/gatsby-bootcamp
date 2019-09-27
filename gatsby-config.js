module.exports = {
  siteMetadata: {
    title: 'Full-Stack Bootcamp',
    author: 'Developer Art Bachmann'
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-transformer-remark`,
  ]
}
module.exports = {
  siteMetadata: {
    title: "Bartosz Białecki | Homepage",
    author: "Bartosz Białecki",
    description: "Homepage of Bartosz Białecki"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'bartosz_bialecki_homepage',
        short_name: 'bbpage',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

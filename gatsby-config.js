module.exports = {
  siteMetadata: {
    title: "Bartosz Białecki | Personal site",
    author: "Bartosz Białecki",
    description: "Bartosz Białecki's personal site",
    keywords: "Bartosz Białecki, personal site, homepage",
    siteUrl: 'https://www.bartoszbialecki.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'bartosz_bialecki_personal_site',
        short_name: 'bb_site',
        start_url: '/',
        background_color: '#17567b',
        theme_color: '#17567b',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-132389287-1",
        // Puts tracking script in the head instead of the body
        head: false,
        anonymize: true,
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    }
  ],
}

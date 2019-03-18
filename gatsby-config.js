let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

let lang = process.env.URL == 'https://www.bartoszbialecki.pl' ? 'pl' : 'en'

module.exports = {
  siteMetadata: {
    title: 'Bartosz Białecki | Personal site',
    author: 'Bartosz Białecki',
    description: "Bartosz Białecki's personal site",
    keywords: 'Bartosz Białecki, personal site, homepage',
    siteUrl: process.env.URL || 'https://www.bartoszbialecki.com',
    lang: lang,
  },
  plugins: [
    'gatsby-plugin-styled-components',
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
        name: 'data',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID || '',
        // Puts tracking script in the head instead of the body
        head: false,
        anonymize: true,
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-netlify`, // must be last in this plugins array
      options: {
        allPageHeaders: [
          'X-Frame-Options: DENY',
          'X-XSS-Protection: 1; mode=block',
          'Referrer-Policy: no-referrer',
          'X-Content-Type-Options: nosniff',
        ],
      },
    },
  ],
}

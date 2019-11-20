let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

let supportedLanguages = ["en", "pl"]
let lang = process.env.LANG

if (lang === undefined) {
  lang = process.env.URL == "https://www.bartoszbialecki.pl" ? "pl" : "en"
}

if (!supportedLanguages.includes(lang)) {
  lang = "en"
}

let siteTitle = "Bartosz Białecki | Personal site"
let siteDescription = "Bartosz Białecki's personal site"
let siteKeywords =
  "Bartosz Białecki, Bialecki, personal site, homepage, software developer"

if (lang === "pl") {
  siteTitle = "Bartosz Białecki | Strona domowa"
  siteDescription = "Strona domowa Bartosza Białeckiego"
  siteKeywords = "Bartosz Białecki, strona domowa, programista"
}

module.exports = {
  siteMetadata: {
    title: siteTitle,
    author: "Bartosz Białecki",
    description: siteDescription,
    keywords: siteKeywords,
    siteUrl: process.env.URL || "https://www.bartoszbialecki.com",
    lang: lang,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Bartosz Białecki - website",
        short_name: "BB-Page",
        start_url: "/",
        background_color: "#17567b",
        theme_color: "#17567b",
        display: "minimal-ui",
        icon: "src/assets/images/website-icon.png",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
        name: "data",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales/`,
        name: "locales",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID || "",
        head: false,
        anonymize: true,
        respectDNT: true,
        allowLinker: true,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-netlify`, // must be last in this plugins array
      options: {
        allPageHeaders: [
          "X-Frame-Options: DENY",
          "X-XSS-Protection: 1; mode=block",
          "Referrer-Policy: no-referrer",
          "X-Content-Type-Options: nosniff",
        ],
      },
    },
  ],
}

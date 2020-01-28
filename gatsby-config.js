module.exports = {
  siteMetadata: {
    title: `Vlasov-shop`,
    description: `Vlasov jewelry online store`,
    author: `@starodubetsm`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vlasovShop`,
        short_name: `vlasov`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `vlasov-shop-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

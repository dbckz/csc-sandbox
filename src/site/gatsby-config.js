module.exports = {
  pathPrefix: `/csc-sandbox`,
  siteMetadata: {
    siteTitle: `CSC`,
    defaultTitle: `CSC`,
    siteTitleShort: `CSC`,
    siteDescription: `CSC`,
    siteUrl: `https://dbckz.github.io/csc-sandbox`,
    siteAuthor: `@rocketseat`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    basePath: `/`,
    footer: ``,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-tracking`,
      options: {
        debug: false,
        googleAnalytics: {
          trackingId: `UA-173229929-2`,
          autoStart: false,
          controlCookieName: `cdeiuk-analytics-enabled`,
          anonymize: true,
        },
        environments: ["production", "development"],
      },
    },
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/content`,
        baseDir: `src/site`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CSC`,
        short_name: `CSC`,
        start_url: `/`,
        background_color: `#f0ede3`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        linkImagesToOriginal: false,
        backgroundColor: `transparent`,
        withWebp: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://dbckz.github.io/csc-sandbox/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}

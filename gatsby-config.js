require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Pastel Pottery`,
    description: `Gatsby Stripe Ecommerce Website`,
    author: `@izabellewilding`,
    image: "/images/name.png", // Path to your image you placed in the 'static' folder
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
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pastel Pottery`,
        short_name: `Pastel`,
        start_url: `/`,
        background_color: `#a1ccc8`,
        theme_color: `#a1ccc8`,
        display: `minimal-ui`,
        icon: `src/images/name.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },

    {
      resolve: "gatsby-source-stripe",
      options: {
        objects: ["Sku", "Product"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      },
    },
    //   options: { //   resolve: `gatsby-source-filesystem`, // {
    //     name: `markdown-pages`,
    //     path: `${__dirname}/src/markdown-pages`,
    //   },
    // },
    `gatsby-transformer-remark`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ["@material", "all.css"], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: "gatsby-background-image",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
  ],
}

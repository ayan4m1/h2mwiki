require('dotenv/config');

const manifestOptions = {
  name: 'H2M Wiki',
  /* eslint-disable camelcase */
  short_name: 'H2MWiki',
  start_url: '/',
  background_color: '#4582ec',
  theme_color: '#4582ec',
  /* eslint-enable camelcase */
  display: 'minimal-ui',
  icon: 'src/images/gatsby-icon.png'
};

const remarkPlugins = [
  {
    resolve: 'gatsby-remark-external-links',
    options: {
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  },
  {
    resolve: `gatsby-remark-images`,
    options: {
      maxWidth: 800
    }
  },
  {
    resolve: 'gatsby-remark-classes',
    options: {
      classMap: {
        table: 'table table-striped'
      }
    }
  },
  'gatsby-remark-autolink-headers'
];

module.exports = {
  trailingSlash: 'never',
  siteMetadata: {
    title: 'H2M Wiki',
    author: 'ayan4m1',
    description: 'A knowledge base about the H2M mod.',
    siteUrl: 'https://h2mwiki.bulletlogic.com/'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/docs`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifestOptions
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-image',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: remarkPlugins
      }
    }
  ]
};

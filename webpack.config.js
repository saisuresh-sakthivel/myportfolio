const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point for the application
  entry: './src/index.js',
  
  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Cleans the output directory before every build
  },
  
  // Enable development mode for better debugging
  mode: 'development',

  // Module rules
  module: {
    rules: [
      // JavaScript/JSX files
      {
        test: /\.jsx?$/, // Matches .js or .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Loads and injects CSS into the DOM
      },
      // Image assets
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        type: 'asset/resource', // Manages image assets
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }      
    ],
  },

  // Resolve extensions for import statements
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Use this file as the HTML template
    }),
  ],

  // Development server configuration
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    open: true, // Automatically opens the browser
    hot: true, // Enables hot module replacement
  },
};

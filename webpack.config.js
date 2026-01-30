import webpack from "webpack";

export default {
  entry: "./src/index.js",
  devtool: false,
  mode: "development",
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: "host",
      shared: {
        "lodash": {
          import: "lodash",
          eager: true,
          singleton: false,
        },
      },
    }),
    new webpack.experiments.schemes.VirtualUrlPlugin({
      type: '.js',
      routes: {
        source() {
          return `
import { cloneDeep } from 'lodash';
cloneDeep({}, {});
export default { routeA: 'A' };
        `;
        },
      },
    }),
  ],
};

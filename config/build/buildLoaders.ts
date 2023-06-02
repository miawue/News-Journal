import webpack from "webpack"

export function buildLoaders(): webpack.RuleSetRule[] {

  const typescritptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node-modules/,
  }

  const stylesLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader",
      "css-loader",
      "sass-loader"
    ]
  }

  return [
    typescritptLoader,
    stylesLoader
  ]
}
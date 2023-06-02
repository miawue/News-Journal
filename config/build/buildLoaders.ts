import webpack from "webpack"

export function buildLoaders(): webpack.RuleSetRule[] {

  const typescritptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node-modules/,
  }

  return [
    typescritptLoader,
  ]
}
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths, Mode } from './config/build/types/config';
import path from 'path';
import webpack from 'webpack'

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html')
}

const mode: Mode = 'development'
const isDev = mode === 'development'
const PORT = 3000

const config: webpack.Configuration = buildWebpackConfig({
  paths,
  mode,
  isDev,
  port: PORT
})

export default config

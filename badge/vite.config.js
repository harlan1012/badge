import { loadEnv } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { resolve } from 'path'
import legacy from '@vitejs/plugin-legacy'
import resolveExternalsPlugin from 'vite-plugin-resolve-externals'
import OnionOssVitePlugin from '@guanghe-pub/onion-oss-vite-plugin'
// 获取文件路径
function fileResolve(...dir) {
  return resolve(__dirname, ...dir)
}
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: env['VITE_APP_BASE_API'],
    optimizeDeps: {
      exclude: ['vue-demi', '@vue/composition-api'],
    },
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_APP_PROJECT_NAME),
    },
    plugins: [
      legacy({
        targets: ['> 1%', 'last 2 versions', 'not dead', 'iOS >= 9', 'Chrome >= 37']
      }),
      createVuePlugin({
        jsx: true,
        vueTemplateOptions: {
          compilerOptions: {
            whitespace: 'condense'
          }
        },
        jsxOptions: {
          compositionAPI: true,
        }
      }),
      resolveExternalsPlugin({
        axios: 'axios',
        YCWebViewBridge: 'YCWebViewBridge',
      }),
      OnionOssVitePlugin({
        output: resolve("dist/assets"),
        rootDir: env['VITE_APP_PROJECT_NAME'] + '/assets'
      }),
    ],
    resolve: {
      alias: {
        '@': fileResolve('src'),
        '@com': fileResolve('src', 'components'),
        '@styles': fileResolve('src', 'styles'),
        '@utils': fileResolve('src', 'utils'),
        '@service': fileResolve('src', 'service'),
        '@assets': fileResolve('src', 'assets'),
        '@pages': fileResolve('src', 'pages'),
      },
      extensions: ['.ts', '.js', '.jsx', '.tsx', '.json'],
    },
    server: {
      host: '0.0.0.0',
    },
  }
}

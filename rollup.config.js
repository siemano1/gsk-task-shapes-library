import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/main.ts',
  output: [
    {
      // file: 'dist/main.js',
      dir: 'dist',
      format: 'es'
    }
  ],
  plugins: [
    typescript()
  ],
  external: [
    'react',
    'react-dom',
    'styled-components',
    'react/jsx-runtime'
  ]
}

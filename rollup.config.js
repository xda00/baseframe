import jsx from 'rollup-plugin-jsx'
import typescript from 'rollup-plugin-typescript';

export default {
  entry: './client/App.tsx',
  format: 'iife',//niminghanshu
    plugins: [
        typescript(),
    jsx( {factory: 'React.createElement'} )
  ],
  dest: './client/dist/bundle.js' // equivalent to --output
};
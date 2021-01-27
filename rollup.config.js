import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy'
//import { uglify } from 'rollup-plugin-uglify';


const buildConfig = {
    input: 'src/main.ts',
    output: {
        compact: true,
        file: 'public/draw.min.js',
        format: 'iife',
        name: 'draw',
        exports: 'named',
    },
    plugins:[
        nodeResolve(),
        typescript(),
        commonjs(),
        babel({
          babelHelpers: 'bundled',
          sourceMap: true,
          extensions: ['.js', '.ts'],
        }),
        copy({
            targets: [
              { src: 'static/index.html', dest: 'public' }
            ]}),
        terser({
            output: {
                ecma: 5,
            },
        })
      ],
};
  
export default buildConfig;
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from 'rollup-plugin-buble'; // Transpile/polyfill with reasonable browser support
import pkg from '../package.json';

export default {
    input: 'src/wrapper.js', // Path relative to package.json
    output: [
      { file: `dist/${pkg.name}.umd.js`, format: 'umd', name: 'Modal' },
      { file: `dist/${pkg.name}.esm.js`, format: 'es', name: 'Modal' },
      { file: `dist/${pkg.name}.min.js`, format: 'iife', name: 'Modal' },
    ],
    plugins: [
        vue({
          scss: {
            indentedSyntax: true
          },
          css: true, // Dynamically inject css as a <style> tag
          compileTemplate: true, // Explicitly convert template to render function
        }),
        buble(), // Transpile to ES5
    ],
};

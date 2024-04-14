import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

export default {
  input: "./printElements.js",
  output: {
    file: "dist/printElements.min.js",
    format: "umd",
    name: "printElements"
  },
  plugins: [
    nodeResolve(),
    babel({
      presets: ["@babel/env"],
      babelHelpers: "bundled"
    }),
    postcss({
      extract: true,
      minimize: true
    }),
    terser()
  ]
};

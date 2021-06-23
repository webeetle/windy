// node-resolve will resolve all the node dependencies
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";

const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".json"];

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  // All the used libs needs to be here
  external: [
    "react",
    "react-dom",
    "react-proptypes",
    "classnames",
    "@headlessui/react",
    "tailwind-override",
  ],
  plugins: [
    resolve(),
    babel({
      babelrc: false,
      extensions: EXTENSIONS,
      presets: ["@babel/preset-env", "@babel/preset-react"],
      exclude: "node_modules/**",
    }),
    commonjs(),
  ],
};

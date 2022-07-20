import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [{
    file: "dist/bundle.js",
    format: "umd",
    name: "key-definitions"
  }
  ],
  plugins: [typescript()]
};
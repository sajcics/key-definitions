import typeScriptPlugin2 from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import dts from "rollup-plugin-dts";
import deleteDts from "rollup-plugin-delete";

const config = [{
  input: "src/index.ts",
  output: [{
    file: "dist/bundle.js",
    format: "es",
    name: "KeyDefinitions" 
  }
  ],
  plugins: [typeScriptPlugin2({ tsconfig: "./tsconfig.json" }), terser()] 
}, {
  input: "src/index.ts",
  output: [{
    file: "dist/bundle.d.ts",
    format: "esm" 
  }],
  plugins: [dts(), deleteDts({
    hook: "buildEnd",
    targets: ["dist/src", "dist/types", "dist/helpers"] 
  })] 
}];

export default config;

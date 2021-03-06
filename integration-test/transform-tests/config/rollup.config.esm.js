/* eslint-disable-next-line import/no-unresolved */
import replace from '@rollup/plugin-replace';

export default [
  {
    input: '../test/test.js',
    output: {
      file: 'transform-tests/output/test.esm.js',
      format: 'esm',
    },
    external: ['@agoric/nat', 'tape'],
    plugins: [
      replace({
        delimiters: ['', ''],
        "import Nat from '../src/index';": "import Nat from '@agoric/nat';",
      }),
    ],
  },
];

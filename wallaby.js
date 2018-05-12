module.exports = function(wallaby) {
  return {
    files: ['server/**/*.js', '!server/**/*.test.js'],

    tests: ['server/**/*.test.js'],

    env: {
      type: 'node',
      runner: 'node',
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        // Tell Wallaby to use Ava's Babel preset, necessary if your project doesn't use Babel otherwise.
        presets: ['@ava/babel-preset-stage-4'],
      }),
    },

    testFramework: 'ava',
  }
}

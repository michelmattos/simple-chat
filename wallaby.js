module.exports = function(wallaby) {
  return {
    files: ['server/**/*.js', '!server/**/*.test.js'],

    tests: ['server/**/*.test.js'],

    env: {
      type: 'node',
      runner: 'node',
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },

    testFramework: 'ava',
  }
}

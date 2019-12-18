module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
};

// Only instrument code when running e2e tests
if (process.env.npm_lifecycle_script === 'vue-cli-service test:e2e') {
  module.exports.plugins = ['istanbul'];
}

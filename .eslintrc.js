module.exports = {
  root: true,
  env: {
    node: true
  },

  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parser: 'vue-eslint-parser',
  plugins: ['vue'],
  //   parserOptions: {
  //     parser: 'babel-eslint'
  //   },

  rules: {
    'no-unused-vars': 'error', // unused Variable not allowed
   
    'no-empty': 'error', // empty condition not allowed
    'no-empty-function': 'error', // empty methods not allowed
    "vue/no-empty-component-block": "error", // empty block not allowed
    'no-console': 'error', // console.log not allowed
  }
}

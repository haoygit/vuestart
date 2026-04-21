module.exports = {
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'prettier' // ← 关闭 ESLint 与 Prettier 冲突的规则
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' }
}

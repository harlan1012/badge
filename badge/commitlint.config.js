module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'type-empty': [2, 'never'],
    'scope-empty': [0],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [0],
    'type-case': [0],
    'scope-case': [0],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat', // 一个新特性
        'fix', // 修复bug
        'perf', // 优化性能
        'style', // 不影响代码含义的更改（空格、格式、缺少分号等）
        'docs', // 文档修改
        'test', // 测试用例修改
        'refactor', // 代码重构
        'build', // 项目打包构建
        'ci', // CI/CD配置更改
        'chore', // 对构建过程或辅助工具和库的更改，例如文档生成
        'revert', // 回退代码
      ],
    ],
  },
}

# template-vue2-single
vue2-单页模板

### 项目启动

```shell

# 装包之前需要先 git init
git init

# install dependencies
npm i or yarn or pnpm i

# 第一次把项目git clone到本地时需要执行
# 启用 Git 钩子
npx husky install
# 创建commit钩子
npx husky add .husky/pre-commit "npx lint-staged"
# 创建commit-msg校验钩子
npx husky add .husky/commit-msg "npx --no-install commitlint --edit "$1""

# 开发环境
npm run dev

# 构建测试环境
npm run build:test

# 构建预发布环境
npm run build:stage

# 构建生产环境
npm run build

# 本地启动地址
http://localhost:3000/项目名称/good
http://localhost:3000/项目名称/

```

### 项目部署

- 登录http://10.8.8.253:8500/project/list新建项目（项目名必须和gitlab名称一致)
- 首次部署需要联系运维新增 【容器集群】
- 直接参照 253 文档部署


### tips

- lit 需要 Node.js 版本 16+。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本
- 使用yarn或pnpm装包

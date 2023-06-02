# web-app

## 安装
```
npm install
```

### 项目启动
```
npm run dev
.dev文件中配置具体变量
```

### 打包至生产环境
```
npm run build:prod
.prod文件中配置具体变量
```

### git钩子
```
package.json中gitHooks配置，目前已有pre-commit与commit-msg
如果失效，需要手动执行命令node node_modules/yorkie/bin/install.js，重新生成.git目录中的.git/hoos
```

### 代码格式化与校验
```
.prettierrc.js配置代码格式，.eslintrc.js配置具体校验规则
```
### git commit规范约定
```
commitlint.config.js配置具体规则
```


# 本地调试
1、install vuepress
```shell
cd knowledgable
npm install -g vuepress

```
2、install vuepress-theme-reco
```shell
npm install vuepress-theme-reco --save-dev
# or
yarn add vuepress-theme-reco
```
3、local run
```shell
vuepress dev docs
# or 
yarn run docs:dev
```
4、build
```shell
vuepress build docs
# or
yarn build docs
```

# 插件源码调整
1、修改 vuepress-plugin-comments 源码，调整评论位置
```html

```
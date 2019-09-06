# x-admin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Thrid Party Components & plugins
```
odata: a small client-side library for requesting data from an OData service
mavon-editor : Markdown Editor
vue-json-editor： Json Editor
vue-quill-editor: Html Editor
vue-core-image-upload: Upload and Crop images  
schedulejs: Schedule works in both the browser (IE7+, FireFox, Chrome, Safari) and Node.js environments
vue-fancyb: 多图预览
vue-lazy-load-img: 图片懒加载
vue-amap: 高度地图控件
vue-mugen-scroll : 无限滚动
vue-img： 饿了么vue-img 指令
vue-timers: Simple mixin to manage timers or intervals for Vue.js
vue-frame: vue iframe 
vue-axios-plugin: 
v-charts: echart vue 实现
vue-diagrams ： 关联图
# layout
vue-grid-layout 
vue-waterfall
vue-fraction-grid
vue-masonry
VueFlex
vue-colcade
# 投票
Vue-poll
path-parser  url path 解析
# 数据处理 data process pipeline
pipeline-js   Pipeline pattern implementation with the support for sync and async stages
richflow      A framework for javascript data pipeline processing
vue-fragment 虚拟标签
```
Components & plugins
```
x-table:
x-form:
x-button:  XConfirmButton、XEditDialogButton、
            XShowDialogButton、XsingleSelectInputButton、
            XTriggerButton
x-panel:
x-tabs:
x-collapse:
x-card:
x-dialog:  XEditDialog、XShowDialog 

```

关于引入iconfont图表的一些说明:
1. icon 放置在src/assets/icon 目录下
2. icon 的前缀必须是el-icon-${iconPackage} iconPackage 为包名
3. 修改*.css(如iconfont.css) 中的class匹配规则如下

```
# 替换${iconPackage}
[class*=" el-icon-${iconPackage}-"], [class^=el-icon-${iconPackage}-] {
  font-family:"iconfont" !important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
}
```

##### 动画库

```
$ npm install animate.css -S
```


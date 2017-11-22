React 懒加载
========

`src/compoents/commons`中封装了如下 3 个用于懒加载的高阶组件：

### `Bundle.js`

配合`bundle-loader`使用懒加载方案, 这需要添加在webpack配置中添加`bundle-loader`加载器。示例可查看`src/compoents/lazilyLoad/LoadTopic.js`。

提示：*终端执行`yarn run eject`命令可以暴露webpack配置，在`config/webpack.config.dev.js` 和 `config/webpack.config.dev.js`添加`bundle-loader`*

### `LazilyLoad.js`

使用最新的`import()`替代Bundle组件。示例可查看`src/compoents/lazilyLoad/LoadAbout.js`。

### `LazilyLoad2.js`

`LazilyLoad`的升级版，可以懒加载多个组件, 示例可查看`src/compoents/lazilyLoad/LoadHome.js`; 

并提供`LazilyLoadFactory`方法, 做了一个懒加载第三方库(`jQuery`)的demo，示例可查看`src/compoents/lazilyLoad/LoadJquery.js`
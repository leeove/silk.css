/**
 * 1. 各项目 和 leeove/silk.css 同步更新该配置文件及依赖包
 */

let plugins = [
	require('autoprefixer'),
	process.env.NODE_ENV == 'development' ? null : require('cssnano')
]

module.exports = {
	plugins: plugins.filter(plugin => !!plugin)
}

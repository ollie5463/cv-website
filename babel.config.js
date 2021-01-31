module.exports = {
	presets: [
		'@babel/preset-typescript',
		[
			'@babel/preset-env',
			{
				modules: false,
				targets: '> 0.25%, not dead',
			},
		],
		'@babel/preset-react'
	],
	plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]],
};
module.exports = {
	siteName: 'Gridsome Starter NetlifyCMS',
	siteUrl: 'https://www.gridsome.org',
	siteDescription: 'Gridsome is a blazing-fast static site generator...',
	titleTemplate: `%s - Gridsome`,
	
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'blog/*.md',
				typeName: 'BlogPost',
				route: '/blog/:slug'
			}
		}
	]
}

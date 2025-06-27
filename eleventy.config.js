/*
 * Custom 11ty plugins.
 */

import date from './source/template/filters/date.js';

/*
 * 11ty configurations.
 */

export default async function (eleventyConfig) {
	// Add date filters to make it a little easier to write dates.
	eleventyConfig.addPlugin(date);
}

export const config = {
	//The source uses Nunjucks, Markdown, and HTML for its pages and templates.
	// HTML and Markdown are used for writing content, then the content is run
	// through Nunjucks and everything is output as static HTML.
	templateFormats: ["njk", "md", "html"],
	htmlTemplateEngine: "njk",
	markdownTemplateEngine: "njk",

	// The blog exercise site is hosted on gitHub Pages, so we add a directory
	// `pathPrefix` that will be appended to all links and sources across the
	// site without us needing to write the full path all the time.
	pathPrefix: '/blog-exercise/',

	// These are the folders that 11ty will use when compiling the built site.
	// The directories for `input` and `output` are relative to the root of the
	// project. The directories for `data`, `includes`, and `layouts` are
	// relative to the `input` directory, i.e. `source`.
	dir: {
		input: "source",
		data: "template/data",
		includes: "template/includes",
		layouts: "template/layouts",
		output: "site",
	}
};

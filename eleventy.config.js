/*
 * 11ty configurations.
 */

export default async function (eleventyConfig) {}

export const config = {
	//The source uses Nunjucks, Markdown, and HTML for its pages and templates.
	// HTML and Markdown are used for writing content, then the content is run
	// through Nunjucks and everything is output as static HTML.
	templateFormats: ["njk", "md", "html"],
	htmlTemplateEngine: "njk",
	markdownTemplateEngine: "njk",

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

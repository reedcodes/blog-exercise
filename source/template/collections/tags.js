export default function(eleventyConfig) {
	eleventyConfig.addCollection('tags', (collectionsApi) => {
		const tags = new Set();

		collectionsApi.getAll().forEach((item) => {
			(item.data.tags || []).forEach(tag => tags.add(tag));
		});

		return([...tags].sort());
	});
};

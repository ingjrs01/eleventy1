module.exports = function(eleventyConfig) {

  // Filter source file names using a glob
  eleventyConfig.addCollection("stories", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/creaciones/**/*.md");
  });

    return {
        dir: {
            input: 'src/content',
            output: 'dist',
            includes: '/includes',
        }
    }
}
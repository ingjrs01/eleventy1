module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: 'src/content',
            output: 'dist',
            includes: '/includes',
        }
    }
}
// tags/tag.test.js
const { extractTags } = require('./tag');

describe('extractTags', () => {
    test('extracts single tag correctly', () => {
        const postContent = "This is a post with a #tag.";
        const expectedTags = ["#tag"];
        const result = extractTags(postContent);
        expect(result).toEqual(expectedTags);
    });

    test('extracts multiple tags correctly', () => {
        const postContent = "This is a post with #multiple #tags in it.";
        const expectedTags = ["#multiple", "#tags"];
        const result = extractTags(postContent);
        expect(result).toEqual(expectedTags);
    });

    test('returns an empty array when no tags are present', () => {
        const postContent = "This is a post with no tags.";
        const expectedTags = [];
        const result = extractTags(postContent);
        expect(result).toEqual(expectedTags);
    });

    test('handles tags with special characters', () => {
        const postContent = "This is a post with a #tag1 and a #tag2.";
        const expectedTags = ["#tag1", "#tag2"];
        const result = extractTags(postContent);
        expect(result).toEqual(expectedTags);
    });

    test('handles tags with underscores', () => {
        const postContent = "This is a post with a #tag_with_underscores.";
        const expectedTags = ["#tag_with_underscores"];
        const result = extractTags(postContent);
        expect(result).toEqual(expectedTags);
    });
});

// tags/tag.js
function extractTags(postContent) {
    const regexTags = /#(\w+)/g;
    let matchTags;
    let postTags = [];

    while ((matchTags = regexTags.exec(postContent)) !== null) {
        postTags.push("#" + matchTags[1].trim());
    }

    return postTags;
}

module.exports = { extractTags };

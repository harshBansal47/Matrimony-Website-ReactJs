const path = require('path');

module.exports = {
    // other webpack configuration options
    resolve: {
        fallback: {
            "stream": require.resolve("stream-browserify"),
            "path": require.resolve("path-browserify"),
            "crypto": require.resolve("crypto-browserify"),
            // Add more fallbacks as needed
        }
    },
    // other webpack configuration options
};

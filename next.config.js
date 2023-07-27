// Substitute fs module with empty, for some reason geojson imports it but we won't use it
module.exports = {
    webpack: (config) => {
        config.resolve.fallback = { fs: false };
        return config;
    },
}
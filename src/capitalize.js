function capitalize(s) {
    return s.length > 0 ? s[0].toUpperCase() + s.slice(1) : s;
}

module.exports = { capitalize };
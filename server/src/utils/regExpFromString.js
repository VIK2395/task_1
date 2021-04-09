function regExpFromString(string) {
  return string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

module.exports = regExpFromString;

function regExpFromString(string) {
  return string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  // new RegExp(string, i)
  // let regEx = new RegExp(target, 'gmi');
}

module.exports = regExpFromString;

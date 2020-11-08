module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-sass-guidelines',
  ],
  rules: {
    'max-nesting-depth': 3,
    'selector-max-compound-selectors': 4,
    'no-descending-specificity': null,
    'selector-no-qualifying-type': null,
  },
};

const { join } = require('path');

module.exports = {
  extends: ['@simplestay/eslint'],
  rules: {
    'import/no-extraneous-dependencies': [
      2,
      // Use package.json from both this package folder and root.
      { packageDir: [__dirname, join(__dirname, '../../')] },
    ],
  },
};

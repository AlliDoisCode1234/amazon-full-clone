module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "react"
    ],
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "rules": {
        "comma-dangle": 0,
        "react/jsx-uses-vars": 1,
        "react/display-name": 1,
        "no-unused-vars": "warn",
        "no-console": 1,
        "no-unexpected-multiline": "warn"
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "15.6.1"
        }
    }
}








// module.exports = {
//   "root": true,
//   "env": {
//     es6: true,
//     node: true,
//   },
//   "extends": [
//     "eslint:recommended",
//     "google",
//     "plugin:react/recommended",
//   ],
//   "parserOptions": {
//     "ecmaVersion": "2020",
//   },
//   "rules": {
//     "quotes": ["error", "double"],
//     "no-unused-vars": "error",
//   },
// };
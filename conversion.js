module.exports = {
  state: "web",
  native: [
    {
      // from native
      files: ["./src/gen/*.js"],
      from: [/View/g, /Text/g, /.*\/\/ -- react-native-import/g],
      to: ["div", "span", "// -- react-native-import"]
    }
  ],
  web: [
    {
      // from web
      files: ["./src/gen/*.js"],
      from: [/div/g, /span/g, /\/\/ -- react-native-import/g],
      to: [
        "View",
        "Text",
        "import { View, Text, Button } from 'react-native'; // -- react-native-import"
      ]
    }
  ]
};

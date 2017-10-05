const replace = require('replace-in-file');
const options = {
  files: 'src/index.js',
  from: [/.*\/\/ -- react-import/g, /span/g],
  to: ['import { AppRegistry, StyleSheet, Text, View } from \'react-native\'; // -- react-native-import','Text'],
};

try {
	const changes = replace.sync(options);
	console.log('Modified files:', changes.join(', '));
  }
  catch (error) {
	console.error('Error occurred:', error);
  }
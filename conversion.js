module.exports = {
	state: "native",
	//from native
	native: [
		{
			files: ["./src/gen/**/*.js"],
			from: [
				/View/g,
				/Text/g,
				/.*\/\/ react-native-button-import/g,
				/.*\/\/ react-native-view-import/g,
				/.*\/\/ react-native-text-import/g,
				/.*\/\/ react-native-stylesheet-import/g,
				/.*\/\/ react-native-convert-styles/g,
			],
			to: [
				"div",
				"span",
				"// react-native-button-import",
				"// react-native-view-import",
				"// react-native-text-import",
				"// react-native-stylesheet-import",
				"// react-native-convert-styles",
			],
		},
		{
			files: ["./src/gen/components/ActionButton.js"],
			from: [/\/\/ react-button-import/g],
			to: ['import Button from "../../components/Button" // react-button-import'],
		},
	],
	//from web
	web: [
		{
			files: ["./src/gen/**/*.js"],
			from: [
				/div/g,
				/span/g,
				/\/\/ react-native-button-import/g,
				/\/\/ react-native-view-import/g,
				/\/\/ react-native-text-import/g,
				/\/\/ react-native-stylesheet-import/g,
				/\/\/ react-native-convert-styles/g,
			],
			to: [
				"View",
				"Text",
				"import { Button } from 'react-native'; // react-native-button-import",
				"import { View } from 'react-native'; // react-native-view-import",
				"import { Text } from 'react-native'; // react-native-text-import",
				"import { StyleSheet } from 'react-native'; // react-native-stylesheet-import",
				"styles = StyleSheet.create(styles); // react-native-convert-styles",
			],
		},
		{
			files: ["./src/gen/components/ActionButton.js"],
			from: [/.*\/\/ react-button-import/g],
			to: ["// react-button-import"],
		},
	],
};

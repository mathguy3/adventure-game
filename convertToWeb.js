const replace = require('replace-in-file');
const options = {
  files: 'src/index.js',
  from: [/View/g,/Text/g],
  to: ['div','span'],
};

try {
	const changes = replace.sync(options);
	console.log('Modified files:', changes.join(', '));
}
catch (error) {
	console.error('Error occurred:', error);
}
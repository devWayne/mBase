var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'test'), function(err) {
	if(err){
	console(err);
	}else{
	console('pubish success');
	}
});

recopy-csj:
	rm -rf csj-uat/*
	cp -r ~/Downloads/csj-uat/* csj-uat/

transform-csj:
	node tranform-bundle-to-js.js

copy-sample:
	cp csj-uat/subjectTypes.js subjectTypes.js
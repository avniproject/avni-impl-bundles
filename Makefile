recopy:
	rm -rf csj-uat/*
	rm -rf apf/*
	rm -rf goonj/*
	cp -r ~/Downloads/csj-uat/* csj-uat/
	cp -r ~/Downloads/apf/* apf/
	cp -r ~/Downloads/goonj/* goonj/

transform-csj:
	node tranform-bundle-to-js.js

copy-sample:
	cp csj-uat/subjectTypes.js subjectTypes.js

transform-bundle:
	node tools/tranform-bundle-to-js.js

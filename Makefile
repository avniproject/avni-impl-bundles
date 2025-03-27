recopy:
	rm -rf csj-uat/*
	rm -rf apf/*
	rm -rf goonj/*
	cp -r ~/Downloads/csj-uat/* csj-uat/
	cp -r ~/Downloads/apf/* apf/
	cp -r ~/Downloads/goonj/* goonj/

transform-csj:
	node tranform-bundle-to-js.js csj-uat

transform-apf:
	node tranform-bundle-to-js.js apf

transform-goonj:
	node tranform-bundle-to-js.js goonj	

transform-goonj-dev:
	node tranform-bundle-to-js.js goonj_dev	

copy-sample:
	cp csj-uat/subjectTypes.js subjectTypes.js

deps:
	npm install

transform-bundle:
ifndef bundle
	@echo "Please provide bundle param"
	exit 1
else
	node tools/tranform-bundle-to-js.js development/$(bundle)
endif

HUGO_BIN := $(shell hvm status --printExecPathCached)
run:
	$(HUGO_BIN) server -s exampleSite --themesDir=../.. --disableFastRender --baseURL="http://localhost:1313/"

serve:
	serve exampleSite/public

git-push:
	git add .
	git commit -m "$(m)"
	git push
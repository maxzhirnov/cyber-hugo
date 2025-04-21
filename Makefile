run:
	hugo server -s exampleSite --themesDir=../.. --disableFastRender --baseURL="http://localhost:1313/"

serve:
	serve exampleSite/public
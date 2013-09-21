output = [input.url.match(/^http(s)?/).length === 2 ? https : http,
		  'get',
		   input.url]

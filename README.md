# SmartVideoSearch

Web application for smart search on pre-build text index with semantic video description that was extracted with neural net

## Build & development

### requirments

* require [Ruby](https://www.ruby-lang.org) and [Compass](http://compass-style.org/) for compiling SCSS into CSS
* require [NodeJS](https://nodejs.org) for serving static files

### install
```
npm i
bower i
```

set `apiUrl` and `elasticUrl` into `app/src/constants.js`, for example like:

```
hackApp.constant('apiUrl', 'localhost:5000/');
hackApp.constant('elasticUrl', 'localhost:9200/');
```

### run

* Run [Flask](http://flask.pocoo.org/) server from [server-repo](https://github.com/Drapegnik/hackathon-flask-server)
* Run `grunt` for building and `grunt serve` for preview.

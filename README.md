# :mag: SmartVideoSearch
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/18d283314296431389723b194cdf1cd1)](https://www.codacy.com/app/Drapegnik/SmartVideoSearch?utm_source=github.com&utm_medium=referral&utm_content=Drapegnik/SmartVideoSearch&utm_campaign=badger)
[![Code Climate](https://codeclimate.com/github/Drapegnik/SmartVideoSearch/badges/gpa.svg)](https://codeclimate.com/github/Drapegnik/SmartVideoSearch)
[![Issue Count](https://codeclimate.com/github/Drapegnik/SmartVideoSearch/badges/issue_count.svg)](https://codeclimate.com/github/Drapegnik/SmartVideoSearch)

Web application for smart search on pre-build text index with semantic video description that was extracted with neural net

## demo
[![ScreenShot](http://res.cloudinary.com/dzsjwgjii/image/upload/v1482098941/smart-video-search-3.png)](https://youtu.be/Reno6eurbxg)

[![ScreenShot](http://res.cloudinary.com/dzsjwgjii/image/upload/v1482098794/smart-video-search-2.png)](https://youtu.be/iiCt_-4yxIU)


* require server [from here](https://github.com/lybros/hackathon-flask-server)

### requirments

* require [Ruby](https://www.ruby-lang.org) and [Compass](http://compass-style.org/) for compiling SCSS into CSS
* require [NodeJS](https://nodejs.org) for serving static files

### install
```
npm i
```

set `apiUrl` and `elasticUrl` into `app/src/constants.js`, for example like:

```
hackApp.constant('apiUrl', 'localhost:5000/');
hackApp.constant('elasticUrl', 'localhost:9200/');
```

### run

* Run [Flask](http://flask.pocoo.org/) server from [server-repo](https://github.com/Drapegnik/hackathon-flask-server)
* Run `grunt` for building and `grunt serve` for preview.

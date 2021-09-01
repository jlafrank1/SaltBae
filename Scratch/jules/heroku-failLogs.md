


```sh

2021-09-01T00:58:34.112981+00:00 app[api]: Release v1 created by user julesrsilver@gmail.com
2021-09-01T00:58:34.112981+00:00 app[api]: Initial release by user julesrsilver@gmail.com
2021-09-01T00:58:34.318117+00:00 app[api]: Release v2 created by user julesrsilver@gmail.com
2021-09-01T00:58:34.318117+00:00 app[api]: Enable Logplex by user julesrsilver@gmail.com
2021-09-01T01:02:19.587679+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/" host=salty-pomo.herokuapp.com request_id=eeeb9aaa-a072-49ba-bdf5-2bbba5619c5a fwd="136.27.27.88" dyno= connect= service= status=502 bytes= protocol=https
2021-09-01T01:02:19.899864+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/favicon.ico" host=salty-pomo.herokuapp.com request_id=5b9dd483-e5b0-4bed-8e33-e9524d2946b6 fwd="136.27.27.88" dyno= connect= service= status=502 bytes= protocol=https
2021-09-01T01:03:06.098915+00:00 heroku[web.1]: Starting process with command `npm start`
2021-09-01T01:03:07.437316+00:00 app[web.1]:
2021-09-01T01:03:07.437325+00:00 app[web.1]: > saltbae@1.0.0 start /app
2021-09-01T01:03:07.437325+00:00 app[web.1]: > node server.js
2021-09-01T01:03:07.437325+00:00 app[web.1]:
2021-09-01T01:03:07.754711+00:00 app[web.1]: internal/modules/cjs/loader.js:892
2021-09-01T01:03:07.754713+00:00 app[web.1]: throw err;
2021-09-01T01:03:07.754713+00:00 app[web.1]: ^
2021-09-01T01:03:07.754713+00:00 app[web.1]:
2021-09-01T01:03:07.754714+00:00 app[web.1]: Error: Cannot find module '../models/User'
2021-09-01T01:03:07.754714+00:00 app[web.1]: Require stack:
2021-09-01T01:03:07.754717+00:00 app[web.1]: - /app/controllers/router.js
2021-09-01T01:03:07.754717+00:00 app[web.1]: - /app/server.js
2021-09-01T01:03:07.754718+00:00 app[web.1]: at Function.Module._resolveFilename (internal/modules/cjs/loader.js:889:15)
2021-09-01T01:03:07.754718+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:745:27)
2021-09-01T01:03:07.754718+00:00 app[web.1]: at Module.require (internal/modules/cjs/loader.js:961:19)
2021-09-01T01:03:07.754719+00:00 app[web.1]: at require (internal/modules/cjs/helpers.js:92:18)
2021-09-01T01:03:07.754719+00:00 app[web.1]: at Object.<anonymous> (/app/controllers/router.js:7:14)
2021-09-01T01:03:07.754719+00:00 app[web.1]: at Module._compile (internal/modules/cjs/loader.js:1072:14)
2021-09-01T01:03:07.754719+00:00 app[web.1]: at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
2021-09-01T01:03:07.754720+00:00 app[web.1]: at Module.load (internal/modules/cjs/loader.js:937:32)
2021-09-01T01:03:07.754720+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:778:12)
2021-09-01T01:03:07.754720+00:00 app[web.1]: at Module.require (internal/modules/cjs/loader.js:961:19) {
2021-09-01T01:03:07.754720+00:00 app[web.1]: code: 'MODULE_NOT_FOUND',
2021-09-01T01:03:07.754720+00:00 app[web.1]: requireStack: [ '/app/controllers/router.js', '/app/server.js' ]
2021-09-01T01:03:07.754721+00:00 app[web.1]: }
2021-09-01T01:03:07.760577+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2021-09-01T01:03:07.760732+00:00 app[web.1]: npm ERR! errno 1
2021-09-01T01:03:07.763947+00:00 app[web.1]: npm ERR! saltbae@1.0.0 start: `node server.js`
2021-09-01T01:03:07.763992+00:00 app[web.1]: npm ERR! Exit status 1
2021-09-01T01:03:07.764045+00:00 app[web.1]: npm ERR!
2021-09-01T01:03:07.764083+00:00 app[web.1]: npm ERR! Failed at the saltbae@1.0.0 start script.
2021-09-01T01:03:07.764120+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2021-09-01T01:03:07.767179+00:00 app[web.1]:
2021-09-01T01:03:07.767254+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2021-09-01T01:03:07.767287+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2021-09-01T01_03_07_764Z-debug.log
2021-09-01T01:03:07.801842+00:00 heroku[web.1]: Process exited with status 1
2021-09-01T01:03:07.889155+00:00 heroku[web.1]: State changed from starting to crashed
2021-09-01T01:03:07.921522+00:00 heroku[web.1]: State changed from crashed to starting
2021-09-01T01:03:10.583186+00:00 heroku[web.1]: Starting process with command `npm start`
2021-09-01T01:03:12.828921+00:00 app[web.1]:
2021-09-01T01:03:12.828933+00:00 app[web.1]: > saltbae@1.0.0 start /app
2021-09-01T01:03:12.828933+00:00 app[web.1]: > node server.js
2021-09-01T01:03:12.828934+00:00 app[web.1]:
2021-09-01T01:03:13.259904+00:00 app[web.1]: internal/modules/cjs/loader.js:892
2021-09-01T01:03:13.259910+00:00 app[web.1]: throw err;
2021-09-01T01:03:13.259911+00:00 app[web.1]: ^
2021-09-01T01:03:13.259911+00:00 app[web.1]:
2021-09-01T01:03:13.259911+00:00 app[web.1]: Error: Cannot find module '../models/User'
2021-09-01T01:03:13.259912+00:00 app[web.1]: Require stack:
2021-09-01T01:03:13.259912+00:00 app[web.1]: - /app/controllers/router.js
2021-09-01T01:03:13.259913+00:00 app[web.1]: - /app/server.js
2021-09-01T01:03:13.259915+00:00 app[web.1]: at Function.Module._resolveFilename (internal/modules/cjs/loader.js:889:15)
2021-09-01T01:03:13.259915+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:745:27)
2021-09-01T01:03:13.259916+00:00 app[web.1]: at Module.require (internal/modules/cjs/loader.js:961:19)
2021-09-01T01:03:13.259917+00:00 app[web.1]: at require (internal/modules/cjs/helpers.js:92:18)
2021-09-01T01:03:13.259917+00:00 app[web.1]: at Object.<anonymous> (/app/controllers/router.js:7:14)
2021-09-01T01:03:13.259917+00:00 app[web.1]: at Module._compile (internal/modules/cjs/loader.js:1072:14)
2021-09-01T01:03:13.259917+00:00 app[web.1]: at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
2021-09-01T01:03:13.259918+00:00 app[web.1]: at Module.load (internal/modules/cjs/loader.js:937:32)
2021-09-01T01:03:13.259918+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:778:12)
2021-09-01T01:03:13.259919+00:00 app[web.1]: at Module.require (internal/modules/cjs/loader.js:961:19) {
2021-09-01T01:03:13.259919+00:00 app[web.1]: code: 'MODULE_NOT_FOUND',
2021-09-01T01:03:13.259919+00:00 app[web.1]: requireStack: [ '/app/controllers/router.js', '/app/server.js' ]
2021-09-01T01:03:13.259920+00:00 app[web.1]: }
2021-09-01T01:03:13.268132+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2021-09-01T01:03:13.268317+00:00 app[web.1]: npm ERR! errno 1
2021-09-01T01:03:13.272467+00:00 app[web.1]: npm ERR! saltbae@1.0.0 start: `node server.js`
2021-09-01T01:03:13.272523+00:00 app[web.1]: npm ERR! Exit status 1
2021-09-01T01:03:13.272584+00:00 app[web.1]: npm ERR!
2021-09-01T01:03:13.272633+00:00 app[web.1]: npm ERR! Failed at the saltbae@1.0.0 start script.
2021-09-01T01:03:13.272677+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2021-09-01T01:03:13.275030+00:00 app[web.1]:
2021-09-01T01:03:13.275116+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2021-09-01T01:03:13.275147+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2021-09-01T01_03_13_273Z-debug.log
2021-09-01T01:03:13.332826+00:00 heroku[web.1]: Process exited with status 1
2021-09-01T01:03:13.390612+00:00 heroku[web.1]: State changed from starting to crashed
2021-09-01T01:03:36.124313+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=salty-pomo.herokuapp.com request_id=7950966e-ffc0-4ff9-bf2f-8fd7718f254f fwd="136.27.27.88" dyno= connect= service= status=503 bytes= protocol=https
2021-09-01T01:03:36.537514+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=salty-pomo.herokuapp.com request_id=426c2899-dda8-4e16-bae8-4697270992e6 fwd="136.27.27.88" dyno= connect= service= status=503 bytes= protocol=https
2021-09-01T01:02:37.000000+00:00 app[api]: Build started by user julesrsilver@gmail.com
2021-09-01T01:05:13.592007+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=salty-pomo.herokuapp.com request_id=39e9b6da-17ec-4ac8-b067-adfb20468a6b fwd="136.27.27.88" dyno= connect= service= status=503 bytes= protocol=https
2021-09-01T01:05:13.904104+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=salty-pomo.herokuapp.com request_id=d88741d0-6f63-403c-ba7e-c48eebefd659 fwd="136.27.27.88" dyno= connect= service= status=503 bytes= protocol=https
2021-09-01T01:03:03.493877+00:00 app[api]: Deploy 33a2aa21 by user julesrsilver@gmail.com
2021-09-01T01:03:03.538436+00:00 app[api]: Scaled to web@1:Free by user julesrsilver@gmail.com
2021-09-01T01:03:03.493877+00:00 app[api]: Release v3 created by user julesrsilver@gmail.com
2021-09-01T01:03:06.000000+00:00 app[api]: Build succeeded


```
# setting up heroku

sample password: nBoMuyXd1BOXXXXX

```sh
heroku create
heroku login
heroku config:set DB
heroku config:set DB_URL=mongodb+srv://databaseUser:nBoMuyXd1BOXXXXX@cluster0.xbo5n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
# *main* in this branch example, but note what branch you should use
git push heroku main

# check config
heroku config

# check recent logs for troubleshooting:
heroku logs --tail

# et voila! 
heroku open
```


git init
heroku git:remote -a salty-pomo
git add .
git commit -am "make it better"
git push heroku main


```sh
➜  SaltBae git:(main) git push heroku main
Enumerating objects: 7298, done.
Counting objects: 100% (7298/7298), done.
Delta compression using up to 8 threads
Compressing objects: 100% (5022/5022), done.
Writing objects: 100% (7298/7298), 10.34 MiB | 7.32 MiB/s, done.
Total 7298 (delta 1974), reused 7244 (delta 1940), pack-reused 0
remote: Compressing source files... done.
remote: Building source:
remote: 
remote: -----> Building on the Heroku-20 stack
remote: -----> Determining which buildpack to use for this app
remote: -----> Node.js app detected
remote:        
remote: -----> Creating runtime environment
remote:        
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NODE_VERBOSE=false
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:        
remote: -----> Installing binaries
remote:        engines.node (package.json):  unspecified
remote:        engines.npm (package.json):   unspecified (use default)
remote:        
remote:        Resolving node version 14.x...
remote:        Downloading and installing node 14.17.6...
remote:        Using default npm version: 6.14.15
remote:        
remote: -----> Installing dependencies
remote:        Installing node modules
remote:        
remote:        > bcrypt@5.0.1 install /tmp/build_c488e652/node_modules/bcrypt
remote:        > node-pre-gyp install --fallback-to-build
remote:        
remote:        [bcrypt] Success: "/tmp/build_c488e652/node_modules/bcrypt/lib/binding/napi-v3/bcrypt_lib.node" is installed via remote
remote:        added 318 packages in 6.909s
remote:        
remote: -----> Build
remote:        
remote: -----> Caching build
remote:        - node_modules
remote:        
remote: -----> Pruning devDependencies
remote:        audited 319 packages in 2.59s
remote:        
remote:        31 packages are looking for funding
remote:          run `npm fund` for details
remote:        
remote:        found 0 vulnerabilities
remote:        
remote:        
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote: 
remote: -----> Compressing...
remote:        Done: 43.2M
remote: -----> Launching...
remote:        Released v3
remote:        https://salty-pomo.herokuapp.com/ deployed to Heroku
remote: 
remote: Verifying deploy... done.
To https://git.heroku.com/salty-pomo.git
 * [new branch]      main -> main
 ```

 
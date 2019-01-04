# Deploy to Github
## `git checkout master` 
## `git pull`
## `npm build`
## `npm deploy gh-pages`

deploy to github using create-react-app
#NPM
#1 `create-react-app —name—`
#2 `cd —name—`
#3 create repo on github 
#4 copy direct path
#5 `git init`
#6 'git remote add origin —copied path`
##so I have a starting point
#7 `git add -A`  `git commit`
#8 `git push --set-upstream origin master`
#9 `npm gh-pages`

#Add these scripts to package.json file
#"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build”,
**THIS BELOW IS ONLY PATH FOR CREATE-REACT-APP
    "start": "react-scripts start",
    "build": "react-scripts build”,

#Pull Requests
Ev: When thinking about branches, remember that the base branch is where changes should be applied, the head branch contains what you would like to be applied. ex. base: master-head: lh-branch (contains changes

# Deployment description of React, Express App (full-stack)-do this on every app you deploy:


# Heroku (hobby account) - deployment steps


# Working Steps to Deploy (log into Heroku): 
## ordered list
1. change files and save
    1. Run `git add .`
2. ‘Git commit -m “<message>”`
3. `heroku create`
    1. This will generate 2 URLS: 
        1. Address we’ll navigate to see our app
        2. **our deployment target
            1. Our git repo that we push our local server to
4. `Git remote add  heroku <copy/paste 2nd URL here>`
    1. Might see fatal: remote heroku already exists-this is ok
5. `Git push heroku master`
6. `heroku logs` - debugging
7. `heroku open` - opens new window w/new app changes

REDEPLOY - heroku 
# Working Steps to Redeploy
1. add new files
    1. Run `git add .`
2. `git commit -m <message>`
3. `git push heroku master`
4. `heroku logs` -check for debugging
5. `heroku open` - open app to see changes

HEROKU deploy PORT
#known port address, so put this inside index.js
Look at underlying environment and see if they’ve declared a port for us to use.
`const PORT = process.env.PORT || 5000;
app.listen(5000);`
(Inside package.json: `main: index.js`,)

#React Full Stack App-react and redux and Express
— Express may be asked for specific routes that it doesn’t have a handler for
1. Express knows of only some routes
2. React-router handles some on its own
3. So, when Express sees a request for a route it doesn’t handle/ know, it returns HTML so that route it doesn’t know can be handled/ accessed
    1. Ex. /surveys
    2. Main js. Gets info from /client/build/static/js/main.js and returns page

#Companies often use this flow for deploying apps:
1. Push to CI
2. Run tests and stuff
3. CI builds and commits client
4. CI pushes build to Heroku

# How to prevent duplicates (in survey)
Preventing duplicate clicks by our users
Recipient.js
Created schema object that represents a recipient. 
Every recipient should have 2 properties associated w/ it
1.  Email
2. Clicked property
    1. This is a boolean (true or false)
    2. Depending upon if this particular email addy has been used to click on a link previously

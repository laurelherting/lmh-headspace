# Clone  repo (no specific pkg)
`npm install`

# Npm install local
`npm install lodash`

# Npm install to list of dependencies 
`npm install - -save`

# Npm check version (same as colleagues, most recent)
npm outdated
(it’ll give ‘wanted’)
Get wanted npm version
`npm update`

# Install npm Package as a dependency
`npm install (package name) --save`

# Install npm Package as a development dependency
`npm install mocha --save-dev`

# Install all packages specified in your package.json
npm install <flags>
e.g. npm install

# Run npm in production environment
NODE_ENV=production npm install

# Install patch ~
# Update minor version (^)
(If you get ‘unmet dependency’, that means you still have lodash in the package.json file)
# Npm uninstall
fix it:
`npm uninstall *version eg. lodash - - save`
removes lodash from package.json file
if you get msg ‘extraneous’=its extra and not needed

Good Practice: 
list all of code that is depended on in app
`npm list` and `npm prune`

# list of packages installed globally
`npm ls -g`

# npm uninstall packages globally
`npm uninstall -g <*package name>`

# when others download my project, they can simply run 'npm install' w/out any arguments and using the package.json dependencies listed, npm will know exactly what to install 
npm install -s underscore

# npm install shortcut
`npm i` 

# Fix npm permissions-install nom globally w/out using sudo
`npm install jshint -g`

# check eslint errors
`npm install -g eslint`

#Check for JS Errors
`npm install jshint -g`

# option 1: change directory owner

# Check to see if package installed correctly
`cat package.json|less`

# package didn’t install correctly
stage changes
`git hard reset`

**JUST Remember:
`npm install --save` is for dependencies
`npm install --save-dev` is for dev dependencies

Almost all your packages will be `npm install --save`
# npm dependencies will get installed to the dev dependencies part of your package.json
`npm install i -D Mocha`

# Configuring npm package.json scripts.
* Preconfigure common tasks like running unit tests: 
* So someone using your module, update test field w/ that exact cmd
* so they don’t have to search for this info
* Now, someone can run ‘npm test’ and not worry what kind of testing library you’re using

ex: edit inside package.json file:
“scripts”: {  “test”: “mocha test.js” },

## npm $SCRIPT_NAME: it will look for that name w/in your scripts field (ex. to check version)
`npm run SCRIPT_NAME`

# install specific version of package
##npm install <package>@<version>
Ex. npm install express@3.0.0  

# Update version
`npm update <package name>`

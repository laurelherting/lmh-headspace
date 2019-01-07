# Clone  repo (no specific pkg)
npm install

# Run latest version
sudo npm install -g
(enter your pwd)

# Npm install local
npm install lodash

# Npm install to list of dependencies 
npm install - -save

# Npm check version (same as colleagues, most recent)
npm outdated
(it’ll give ‘wanted’)
Get wanted npm version
npm update

# Install global package:      
npm install <package_name> -g
ex npm install http-server -g

# Install npm Package as a dependency
npm install colors --save

# Install npm Package as a development dependency
npm install mocha --save-dev

# Install all packages specified in your package.json
npm install <flags>
e.g. npm install
e.g. npm install --python=python2

# Run npm in production environment
NODE_ENV=production npm install


# Install patch ~
# Update minor version (^)
(If you get ‘unmet dependency’, that means you still have lodash in the package.json file)
# Npm uninstall
fix it:
npm uninstall *version eg. lodash - - save
removes lodash from package.json file
if you get msg ‘extraneous’=its extra and not needed

Good Practice: 
list all of code that is depended on in app
npm list and npm prune

# check to see list of packages global
npm ls -g - -depth=0

# npm uninstall packages globally npm uninstall -g *package name

# when others download my project, they can simply run 'npm install' w/out any arguments and using the package.json dependencies listed, npm will know exactly what to install 
npm install -s underscore

# npm install shortcut
npm i 

# npm dependencies will get installed to the dev dependencies part of your package.json
npm install i -D Mocha

# Configuring npm package.json scripts.
Preconfigure common tasks like running unit tests: So someone using your module, update test field w/ that exact cmd so they don’t have to search for this info. Now, someone can run ‘npm test’ and not worry what kind of testing library you’re using
npm t

ex: edit inside package.json file:
“scripts”: {  “test”: “mocha test.js” },

## npm $SCRIPT_NAME: it will look for that name w/in your scripts field (ex. to check version)
npm run SCRIPT_NAME

# install specific version of package
##npm install <package>@<version>
Ex. npm install express@3.0.0  
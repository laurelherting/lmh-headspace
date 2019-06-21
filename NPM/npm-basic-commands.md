# check eslint errors
`npm install -g eslint`

#Check for JS Errors
npm install jshint -g

# Fix npm permissions-install nom globally w/out using sudo
npm install jshint -g

option 1: change directory owner
# see permissions
ls -l
# first 3 show what owner can do in file
ex. rw-read and write
ex. r-read
# Name of user running program
whoami
# change ownership so you can write to program
sudo chown your_user `file`
# run program again to see new permissions (owner)
ls -l
# output you’ll see = your_user

# Show all permissions on children and parent directories
ls -la 

# Run recursively-run all directories inside 
sudo chown -R your_user /usr/local/    
ls -la

# Afraid of changing every directory of user/local
You can usually change just 3 directories. Those are:
1. sudo chown -R /usr/local/lib/node_modules
2. sudo chown -R /usr/local/bin/
3. sudo chown -R /usr/local/share/

# list of npm packages
`npm ls`

npm Command Line Usage
# Clear screen: clear

# Help
npm <command> -h
e.g. npm install -h
npm <command> -h
e.g. npm init -h Initializing a package.json file
npm init

# Git Usage To ignore files create a .gitignore and add the files and folders you want to ignore.
Ex .gitignore file:
node_modules/
.DS_Store
config/database.yml

**use ‘la' in zsh or 'ls -la’ to see file added

# Set up Node.js modules
automated process to create it
`npm init`
start with this default, Best Practice

# Check to see if package installed correctly
cat package.json|less

# package didn’t install correctly
stage changes
git hard reset

**JUST Remember:
`npm install --save` is for dependencies
`npm install --save-dev` is for dev dependencies

Almost all yolur packages will be `npm install --save`

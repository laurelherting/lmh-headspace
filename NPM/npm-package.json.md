package.json has path for file to include
Ex, 
var bcrypt=require(‘crypt');
bcrypt.genSalt(10, function(err, salt) {
    crypt.hash(unsecurePlainTextPassword, salt, function(err, hash) { console.log(hash); }}; }};

npm help json for what each of the fields in the package.json does

# Update version
npm update <package name> -g
ex npm update http-server -g

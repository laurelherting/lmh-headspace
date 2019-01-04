Understanding the operating system (Lynx)
Most operating systems run on Lynx(OS X)-POSI

whatever you do, never, ever, ever, ever type 
```rm -rf /```3:18] 
or even worse 
```sudo rm -rf /```3:18] 
"/" is your whole hard drive


Remove Docs-be careful not to delete anything too quickly or press enter too soon. Once it’s deleted, VERY hard to get it back. -r says we are very sure we want to delete all the docs in the directory
$ rm -r docs
Copy Docs-recursively copy all the files
$ cp -r documents docs
Rename Docs  mv
Make a Directory  mkdir
Long Version,Prints long for of file list  $ ls  -l
View hidden files  $ ls -a, lists all files, including dot files
Clear the Screen,  [clear] (command)
Change directory, Cd
pwd, Print working directory
Less/ more Feature, preferred method $ less
Cat, prints contents of one or more files to console
Nano, a simple text editor, 
Move docs, mv, ex. mv index.txt hi.txt, equivalent to renaming it
(.), current directory
(..), each dot dot, takes us one level up in code

Home Trash Folder
$HOME/.Trash

Managing Users
$ curl -L trhou.se/patch01 |bash
Ex. Add a user
$ sudo adduser
su (switch user) allows you to log in as a different user
whoami, find out what user you are currently logged in with

File Permissions
ls -l -  List files in long format, including permissions info
chmod - Change the permissions (mode) of a file or directory
rex notation: 10 character permission representation. The first character denotes if it is a dirctory. d means directory, -, means not a directory. The next 9 characters can be grouped into triplets of rwx. The leftmost triplet is for the owner of the file, the middle is the group owner, and the right is permissions for others. rwx stand for the read, write, and execute permissions, respectively.
Octal notation
You may read or set permissions using a 3 digit octal number. The digits represent the owner, group, and other permissions, from left to right. Each digit may be 0 through 7 representingthe different combinations of read, write, and execute.
To compute what each digit means, use this formula.
read/r = 4
write/w = 2
execute/x
= 1 For each permission you want to grant, sum their corresponding values.
ex. add the read permissions only for the user and group of a file: ‘chmod ug+r'
ex. octal representations is equivalent to the following permission string: -rwxr-x—x: 751
ex. used to change the permissions of a file or directory: Chmod'

File Ownership
chown - Change the owner of a file or directory.
Sudo, sudo command allows you to override all permissions temporarily to get things done.
sudo - Run a command as the super user.
sudo !! - Run the previous command as the super user.

Processes
Programs
[top](http://en.wikipedia.org/wiki/Top_(software\)) - Show active processes
[ps](http://en.wikipedia.org/wiki/Ps_(Unix\)) - Show process statuses
grep - Search for a pattern

Find a process by name
search for a running process using a pattern.
ps aux | grep “SEARCH PATTERN"


***Pausing and Resuming***
Pause a running process in the console in order to perform some other action. It can easily be resumed allowing you to multitask from a single console window.
Key Sequences
* ctrl + z Stop (pause) a process
* ctrl + c Terminate (exit) a process
Commands
* [fg](http://en.wikipedia.org/wiki/Fg_(Unix\)) - Bring a job to the foreground
* [jobs](http://en.wikipedia.org/wiki/Job_control_(Unix\)) - Prints the list of jobs in session

Killing Processes
    * [kill](http://en.wikipedia.org/wiki/Kill_(command\)) - Send a signal to a process
Signals
* KILL or -9 - Force a process to exit (last resort) 
* TERM (default) - Requests that the process terminates 
* STOP - Stop or pause a process

Environment Variables
Commands
* VARIABLE=value - set a local environment variable
* export VARIABLE=value - set an environment variable that will be visible to child processes
* env - view environment variables
* bash - start a new session within your current session
* echo - display the arguments sent to echo
which, print location of program 

Find and Grep
find files, Troubleshooting
If you have deleted your hello.txt and want it back, run the following command to restore it to your home directory.
ex, curl -Lo ~/hello.txt http://trhou.se/console_hello
Commands:
$ find . -name "search" - look for files with the name search starting from your current location
ex1, $ find . -name “how_goes_it.txt"
ex2, $ find / -name
grep "pattern" file - Search inside a file for a pattern
grep-v - show lines w/out the pattern (ex lines that don’t have the letter “e” 
ex.#1 $ grep -v e hello.txt 


Pipes and Redirection
Use simple commands. In & Out. 
Commands
somecommand < inputfile run somecommand with input from inputfile, instead of the keyboard
somecommand > outputfile run somecommand with output to outputfile instead of the terminal screen.
command1 | command2 pipe the output of command1 to the input of command 2
>>FILE - Redirect output to append file
/dev/null - a special file that will delete anything written into it


Building Software From Source
Manual way to install software
Commands
* sudo apt-get update Update your computer's catalog of available software
* sudo apt-get install build-essential Install the tools needed to build software from source code
* curl -O URL Download the file at the URL
* tar -xvf FILENAME.tar.gz Decompress the tar.gz file to the current directory
* ./configure Run the configure script that comes with the source code. This creates a Makefile
* make Run the build specified in the Makefile
* sudo make install Run the install script from the Makefile. This installs the program
Related Links
* SQLite.org


Package Managers

When installed, makes building software from source easier
CMDS
* apt-get update Update your package catalog on your computer
* apt-cache search PATTERN Search the available packages for a pattern
* apt-get install PACKAGE Install one or more packages
* apt-get upgrade Upgrade to the latest version of all the packages installed
* apt-get remove PACKAGE Remove or uninstall package from your computer


Copy/ move Image or document between Zsh and iMac
# cmd line: 
    `cp ~/Desktop/background.jpg ./portfolio`
## example: copied an image (background.jpg) from desktop to current folder and named it `portfolio`

# example:
import profilePic from ‘./assets/profilePic.png’;
<img src=“/assets/profilePic.png" />

REMEMBER:
**Never go into inner files in console. ALWAYS stay in the root of an app**

# module not found: Can't resolve...
You need to do yarn install!


if you want to see the quotes in a json file. You can always do this command in vim:
`:set conceallevel=0`

Installs:
you should have either a yarn.lock file OR a package-lock.json. One or the other. You're either using `yarn` or `npm` for installing modules

Search error in term, in project folder
(~/code/laurel/relay-modern master)
` rg -S ‘User.changeName(error_msg)’ `

bc off the top of my head I have no idea where `User.changeName` is mentioned in the code
`rg` is ripgrep. It's the same as `grep` except quicker. I think you have ripgrep installed already by me. `brew install ripgrep`

with grep you have to spend more time looking in specific directories 
`❯ grep 'changeName' ./graphql_types/*.js`
anyways so i go to line 18 in that file
I see `User` is an object being required on line 5. So i ctrl p and open up the /mongoose_models/user file

# 700 is permissions for READ, WRITE, EXECUTE for just your username

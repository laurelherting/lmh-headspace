#Git commit w/ msg
`git commit -m “put message here”`

UNIX CMDs refresher
cd - think 'change directory:' change current working directory. Remember that ~ is a special symbol that always represents your "home" directory.
ls - think 'list:' shows list of all files/folders in current directory. With the -a flag, also shows hidden files & folders.
mkdir - think 'make directory:' creates new directory with specified name.
touch - updates the "last modified" timestamp on a file to now. Also creates empty file if the filename specified doesn't exist.
mv - 'move:' moves a file or directory to new location.convenient way to rename files & folders.
rm - 'remove:' deletes file(s)/folder(s).
git init [project_name] - initializes new repository
git add - adds files to repository
git commit - commits all added files to repository as a change -a flag, commits all changes to all tracked files.
-m flag, specify commit message on command line instead of default editor.
git config - make configuration changes to Git. 
--global flag, makes changes available across entire system.
git status - show the current status of the git repository
git log - Show chronological log of all commits to current repository.
git checkout - check out diff version of code from current one
git diff - create a "diff" view to demonstrate what has changed between two diff versions of repository.
Challenge 11 parts 
Create a new repository in the current folder
git init
I just created a new file named index.html; can you add it to the repository?
git add index.html
And now that it's been added to the repository, let's commit it
git commit -m “message"
I just made some more changes to the repository - check the repository status to see what I did.
git status
Add the new file, about.html, to the staging area.
git add about.html
Add the changes I made to index.html to the staging area.
git add index.html
Commit all of the changes in the staging area to the repository.

git commit -m”message"
Take a look at the history log for this repository.
git log
HEAD~1 is a special commit identifier in git; it stands for the previous commit (not the one we just made, but the one before that). Can you use that identifier to check out the previous commit in this repository?
git checkout HEAD~1
Take a look at the history log to verify that we're looking at the older commit.
git log
Now let's check out the most recent commit (remember git calls this HEAD) so that we're ready to continue working.
git checkout HEAD


Pull Request
ask for reviewer to check changes to github push
#Merge PR
##in term switch to master, then git pull and create new branch

 critiquing pr's and adding requested changes

# Remove file already committed 
## `git rm -r —cached <folder_name>` 
ex. Accidentally committed node_modules, need to undo:
`Git rm -r —cached node_modules`

#rename repository 
## `mv old_name new_name`

#add ‘node_modules’ to .gitignore file
Git rm-rf —cached node_modules
Git commit -m ‘Remove the now ignored directory node_modules’
Git push origin master

#Filename
If it exports a class:
Use uppercase for filename
If it doesn’t export anything, use lowercase

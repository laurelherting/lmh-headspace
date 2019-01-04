# delete branch remote
`git push origin --delete <branch_name>`

# delete branch local
`git branch -D branch_name`

\# list remote branches
    

\# list local branches
`git branch`

# Create local branch from remote branch
`git checkout -- track -b dev
origin/dev`

# Create local branch from remote branch
`git checkout --track -b new_feature_name origin/new_feature_name`

# Check out remote branch from origin (github)
git checkout —track origin/name_of_branch

# Create local branch
`git checkout -b new_feature_name`

#`git checkout -b dev-lh`

\# Change branch
`git branch -a`, View branches
`git checkout (name of branch)`

# Temporary storage: working in file, interrupted, stash/ hold onto changes not yet ready to commit
`git stash`

# create new branch, transfer work over (coding in wrong branch, ex. master, not dev)
`git stash`
`git checkout -b some_new_feature`
`git stash apply`

# bring back files to view from git stash
`git stash apply`

# , saved changes over another version, accident-see order, choose version
`git stash list`
git stash apply stash@{1}

# Resetting Branch, if no unsaved/unpushed commits exist
`git reset --hard origin/dev`
(dangerous, like rm-can lose things that I can’t easily get back)

# Push New Local Branch to Remote
`git push -u origin <branchName>`

# Before Git Commit, do Git Status to make sure up to date

# Update Code (from Evan)
You'll want to do the following:
* checkout dev-lh branch
* make changes to index.jsx
* confirm with npm start, opening browser that all works ok
* stage the changed file (git add ./app/index.jsx)
* commit (git commit)
* push (git push)
* comment on the PR on github.comthat you made the changes

sets an upstream origin
# Push New Local Branch to Remote
# git push -u origin <branchName>

[9:52] 
LGTM stands for 'Looks good to me'

Notes from TeamTreeHouse
“The trunk of our repository"
**Keep names shot and meaningful

git branch branchname - create new branch named
git checkout branchname - switch to another branch, a diff version of our code named branchname.
git checkout -b branchname - create new branch named branchname and switch to that branch.
git branch - list all branches in current repository & indicate which branch you're currently in.
git branch -D branchname - delete branch named branchname from repository.    
# download latest repo branch information
git fetch
(to make sure you download the latest info from origin)

# Find out what branch I am on
git status
ls -la ./code
then it shows me the folder inside there

retrieve just one from git stash list

# Check out a file from a different branch
npm start

Merge Conflict
`git reset --hard origin/master`
# then, delete branch that had conflicts and make new branch:
# delete your dev-lh branch 
`git branch -D dev-lh`
## then create a new dev-lh branch`
### then `git pull origin master` to merge changes

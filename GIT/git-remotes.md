Cloning-copies of same repositories. So, 2 people can work on same doc, but both have different histories. Bring 2 together.
**pushing/pulling
Git Clone 

Clone the repository
git clone <repository_url>
List all branches
git branch -a 
Checkout the branch that you want
git checkout <name_of_branch>
Cloning
git clone - create new repository that is clone of remote repository.
git remote - list all remote repositories associated with current repository.
git remote add - add new remote repository to current repository.

Pushing & Pulling
**send changes back & forth to keep everyone in sync
git push - push latest changes to remote repository.
git pull - pull  latest changes from remote repository to your repository. Acts kinda like a merge.

# get new changes from master on github
`git pull origin master`

git status
git add (name of doc, ex. new.html
git commit -m “Added new file"
git push origin master
//enter credentials for git hub account

#to pull request, go to github and "create pull request”

# Undo a git add - remove files staged for a git commit 
`git reset filename.txt`

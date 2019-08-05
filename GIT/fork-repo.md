# Step 1
https://facebook.github.io/create-react-app/docs/getting-started
`npx create-react-app lh-baby-steps`
`cd lh-baby-steps`
  * note: as if you were creating a brand new react app / git repo folder

# Step 2
Add Origin Of Existing Repo:

  * inside console
`git remote add origin https://github.com/laurelherting/my-repo.git`

# Step 3
`git checkout -b backup/non-cra-master`
`git reset --hard origin/master`
`git checkout master`
`git checkout -b feature/cra-scaffold`

# Step 4
`git rebase -Xtheirs backup/non-cra-master`

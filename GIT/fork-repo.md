source: https://github.com/evanharmon/eph-headspace/commit/a0ff8e43c269ae44247dc6abc6396ecf071e1acf#diff-93dbf51e0fa07f989cd72afb18a62516

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

# Step 5
`git checkout backup/non-cra-master -- app/`
`git mv public/ src/`
  * for example now you could import babyJSON from './baby-steps.json' within src/index.js
  and display it in a div or something
  * `ls` should show app folder
    * move `assets` into src folder, if can't find it
    * should be able to use that baby.json file

  * commit to lock in changes

* note: can't find file within these steps? Do a hard reset:
`git reset --hard feature/cra-scaffold`
  * should show a public folder, src folder, etc

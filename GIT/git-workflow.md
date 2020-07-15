adding a commit workflow:
[
\*When both are green (meaning staged for commit) then you do `git commit`. That will open neovim and you enter in your message. Then do `:wq` and the commit wil go thru. Then you do `git push` to send it back up to github.com

- check files changed
  /git status

- add files
  /git add (file name)

\*check current file is correct
/git status

- make commit with message
  /git commit -m (“message here")

\*check status
/git status

\*check log
/git log

- push commit to github
  /git push

\# Workflow for 'git flow style'

- git checkout dev
- git pull
- git checkout -b new_feature_name

Make a PR for a commit on github

- on right, 'Your repositories' big box, click on repo name
- click on 'Pull requests' tab
- click 'new pull request' big green button
- change base dropdown from 'master' to 'dev'
- choose your branchname in the 'compare' dropdown
- scroll through the 'commits' listed and make sure yours is listed.
- scroll through the files edited to make sure the changes are what you think you are making
- click big green 'Create pull request' button
- enter in a name for the PR subject
- enter in a comment for the PR
- assign the commit to a person (The box doesn't close once you click a name - but it'll have been added), close the assignment box, 'assignees box'
  [
- confirm it's assigned to that person
  [
- DM them on slack just so they know you assigned them to a PR (in case they don't see the email)

## Git merge worked correctly

- Show List Files Changed in Commit

```console
git show --pretty="format:" --name-only {insert the last git commit hash without these braces }
```

- if it worked, there shouldn't be output, no error msg
- `git log`
- Scroll through to see recent changes by pressing spacebar

## Revert file already committed

you can revert only one file to a specified revision.

First you can check on which commits the file was changed.

`git log path/to/file.txt`

Then you can checkout the file with the revision number.

`git checkout 3cdc61015724f9965575ba954c8cd4232c8b42e4 /path/to/file.txt`

After that you can commit and push it again.

Movement 
*know how to get around
 h, j, k, l Move one space left, down, up, or right (use for single steps)
f <character>, F <character>
Move fwd(f) or backward(F) onto next occurrence of <character> on current line. So, it brings you to character
ex. #1, Fe - moves back to the “e”,
t - brings you right up to the character you’re looking for
T - brings you right up the character you’re looking for, only going backwards
Move between words: w,b,e
w - move to beg of next word
b - move to beg of previous word
e - move to end of current or next word
ex. 3e, moves to end of the 3rd word
Move w/in current line 0,_,$
0 - move to far-left on current line
_ - move to first character on current line
$ - move to last character on current line
gg, G - top/ bottom of file
Move to top (gg) or bottom (G) of file
{,} Move to top ({) or bottom (}) of paragraph
type CMD + i to get into insert mode, so you can type
CMD + v - vision mode, highlights text so you can work w/ it
Text Editing
These are our verbs
d - delete
ex #1, shift + DW - deletes word
ex #2, shift + D, deletes whole line 
ex. #3, D + $ -  deletes end of the line
x, X - Let’s you delete one character at a time
Delete character under cursor (x) or delete character before the cursor (x)
v,V - Switch to visual mode & start highlighting (v) or highlight entire line (v)
Ex #1, v$ - capitalize everything on line
i, I - Switch to insert mode before cursor (i), or at the beginning of line (I)
s,S - start substituting at character under cursor (s) or clear line at far-left edge (S). Switches you to insert mode.
a, A - Switch to insert mode after cursor (a) or at end of current line (A)
c,C - start changing characters(c) or remove all characters after cursor & go to insert mode(c)
o,O - Open new line for editing below (o) or above (O) current line
***Awesome 2 tricks***
ci - c + i - change inside of something
ex #1, c + i + ‘ - ci’ - change inside quotes 
ex. #2, c + i + () - change inside () - parentheses 
DA() - delete around parentheses ()
. return - repeats last action you did
ex#1, 'foo', 'foo', 'foo', 'foo'
u - undo 
U - fix whole line
A -Append text: go to line, press A, make changes to text, press esc to get back to normal mode
Edit a file
:wq save file & exit

# Find word in file
## `:/*WORD*` - find a specific word in file, Once found, press  `n` key to go directly to the next occurrence of the word. 

:q!
at shell prompt type cmd: $ vim tutor
edit text
save :wq

Add a number in front of operation to complete that x amount 

ex. 3dd-delete three lines of code

#ask vim look inside folder
`ag {file name} ./src`

#use `ag` instead of Grep

#brew install the_silver_searcher

#compare top file vs bottom file
`:Gdiff`

# Inspect shortcut
` command + option + I `

# Find files
` Control + ?(R,X,K) `

# Go between windows 
` command + ` ` (Tilde)

# find file
` :ls `
` :b #_filename `

# go between files in nvim
` spacebar + b `

# file search
` spacebar + F `

# repeat vim command
## `.`

# delete next instance of word found in file
## `df + .`

# NVIM awesome cheat sheet site:
https://github.com/LeCoupa/awesome-cheatsheets/blob/master/tools/vim.txt


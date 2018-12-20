nmap <Leader>b :Buffers<CR>
nmap <Leader>f :GFiles<CR>
nmap <Leader>F :Files<CR>
nmap <Leader>t :Tags<CR>
nmap gs <plug>(GrepperOperator)
xmap gs <plug>(GrepperOperator)
nnoremap <leader>* :Grepper -tool rg -cword -noprompt<cr>
nnoremap <leader>g :Grepper -tool rg<cr>
nnoremap <leader>G :Grepper -tool rg -buffers<cr>

`yss` - kiss ass w/ vim-surround. 

`yss)` surrounds line in ( )

# `cSbb` take the contents of the parenthesis and move it to a new line
game changer

# `ea` // append after word.
# `sfe` // use sneak to find the first word starting with `fe`. Use `f` and `t` to go forward back among matches

# VIMRC concatenation
autocmd FileType python
    \ setlocal ai si et sta sw=4
    \ textwidth=80 backspace=indent,eol,start fo=croql

# vim-surround: `The targets b, B, r, and a are aliases for ), }, ], and >``:te npm start` and neovim will open up a terminal window and run the command `npm start`.

# Search for file inside vim
it’s leader f
and leader shift f
we use spacebar as our leader key
i would do: spacebar then shift f
` spacebar + shft + f`
## Same thing:
:Files
or
:GFiles

# `hss…`  command for git
you only use that when accessing your dot files
so you probably will only use that command every two to three weeks
you just use normal git otherwise

# here is my init.vim file inside `~/.config/nvim/init.vim`

# Do floating point math in insert mode: `i<ctrl>R=4119.0/5280.0`

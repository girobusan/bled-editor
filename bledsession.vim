let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/PROJECTS_MMXX/latid/block-editor-2
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +431 src/bled/ui.js
badd +1 src/bled/content_render.js
badd +299 src/bled/coreblocks.js
badd +40 term://.//5214:fish
badd +286 term://.//6111:fish
badd +18 README.md
badd +248 src/bled/old_coreblocks\ .js
badd +348 src/bled/blockeditor.js
badd +92 src/bled/scss/blockeditor.scss
badd +26 src/bled/presentation.js
badd +2 test/presentation.js
badd +0 term://.//240030:fish
argglobal
%argdel
edit src/bled/scss/blockeditor.scss
set splitbelow splitright
wincmd _ | wincmd |
split
1wincmd k
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd w
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 33 + 25) / 50)
exe 'vert 1resize ' . ((&columns * 72 + 72) / 145)
exe '2resize ' . ((&lines * 33 + 25) / 50)
exe 'vert 2resize ' . ((&columns * 72 + 72) / 145)
exe '3resize ' . ((&lines * 13 + 25) / 50)
exe 'vert 3resize ' . ((&columns * 48 + 72) / 145)
exe '4resize ' . ((&lines * 13 + 25) / 50)
exe 'vert 4resize ' . ((&columns * 47 + 72) / 145)
exe '5resize ' . ((&lines * 13 + 25) / 50)
exe 'vert 5resize ' . ((&columns * 48 + 72) / 145)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 140 - ((18 * winheight(0) + 16) / 33)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
140
normal! 0
wincmd w
argglobal
if bufexists("src/bled/coreblocks.js") | buffer src/bled/coreblocks.js | else | edit src/bled/coreblocks.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 102 - ((0 * winheight(0) + 16) / 33)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
102
normal! 046|
wincmd w
argglobal
if bufexists("term://.//5214:fish") | buffer term://.//5214:fish | else | edit term://.//5214:fish | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 1055 - ((12 * winheight(0) + 6) / 13)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1055
normal! 0
wincmd w
argglobal
if bufexists("term://.//6111:fish") | buffer term://.//6111:fish | else | edit term://.//6111:fish | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 286 - ((2 * winheight(0) + 6) / 13)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
286
normal! 024|
wincmd w
argglobal
if bufexists("term://.//240030:fish") | buffer term://.//240030:fish | else | edit term://.//240030:fish | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 146 - ((0 * winheight(0) + 6) / 13)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
146
normal! 0
wincmd w
exe '1resize ' . ((&lines * 33 + 25) / 50)
exe 'vert 1resize ' . ((&columns * 72 + 72) / 145)
exe '2resize ' . ((&lines * 33 + 25) / 50)
exe 'vert 2resize ' . ((&columns * 72 + 72) / 145)
exe '3resize ' . ((&lines * 13 + 25) / 50)
exe 'vert 3resize ' . ((&columns * 48 + 72) / 145)
exe '4resize ' . ((&lines * 13 + 25) / 50)
exe 'vert 4resize ' . ((&columns * 47 + 72) / 145)
exe '5resize ' . ((&lines * 13 + 25) / 50)
exe 'vert 5resize ' . ((&columns * 48 + 72) / 145)
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFI
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :

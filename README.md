#COMANDOS GITHUB

Inicializar um repositorio --- GIT INIT
Para saber o status dos arquivos --- GIT STATUS

´´´bash

On branch master
No commits yet
Untracked files:
(use "git add <file>..." to include in what will be committed)
index.html
nothing added to commit but untracked files present (use "git add" to track)

´´´

Para Puxar e salvar os arquivos que esté em manuntençao --- GIT ADD.
Para saber se o arquivo que pé está o arquivo se foi salvo ou não --- GIT ATATUS

´´´bash

On branch master
No commits yet
Changes to be committed:
(use "git rm --cached <file>..." to unstage)
new file: index.html

´´´

GIT COMMIT -A -M ""
-a serve para adicionar todo tipo de arquivo
-m serve para adicionar uma mensagem ""

da mais um GIT STATUS para ver a finalizaçao do processo

git remote add origin https://github.com/VictorAntunesJ/XPE.git
estou fazendo uma conexao com meu repositorio do GitHub

meu branch principal nomeado em main
git branch -M main

e por ultimo da um
git push -u origin main

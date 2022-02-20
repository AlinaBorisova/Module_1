git config --global user.name "Alina Borisova"
git config --global user.email "b-alina1999.borisova@yandex.ru"

git config --global core.autocrlf true
git config --global core.safecrlf warn
git config --global core.quotepath off
git config --global init.defaultBranch main

git init
git status
git add index.html
git commit -m "сообщение"
git log --oneline  посмотреть историю коммитов
git diff
git diff --color-words // показывает по строкам изменения

git checkout .  
git checkout name.file  // откатить изменения в одном файле или каталоге
git push 
git clone https://github.com/Quper87/git-lesson.git

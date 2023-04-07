@echo off
git init
git add .
git commit -m "Commit"
git remote add origin https://github.com/Garfild63/Infotab.git
git pull origin master
git push origin master
pause

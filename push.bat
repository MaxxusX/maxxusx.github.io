@echo off
git add .
cls
set /p commitmsg="commit msg: "
echo git add .
git add .
echo git commit -m "%commitmsg%"
git commit -m "%commitmsg%"
echo git push
git push
echo git pull
git pull
pause
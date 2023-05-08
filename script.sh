echo -n "Commit message:"
read -r mess
echo -n "commit branch:"
read -r branch

git add -A
git commit -m "'$mess'"
git push -u origin "$branch"
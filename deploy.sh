#!/usr/bin/env sh
set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/SyuanYuri/vue_ukulele.git master:gh-pages

cd -
# Build
npm run build

# Publish to GitHub Pages
cd ./dist
git init
git add -A
git commit -m '[vue-cli-service] update demo'
git push -f git@github.com:talltotal/vue-wxqlogo.git master:gh-pages

# Cleanup
cd ../..
rm -rf ./dist
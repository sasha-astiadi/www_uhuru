

set -e

cd /Users/despiegk/codewww/github/uhuru-me/www_uhuru

rm -f yarn.lock
rm -rf .cache        

set +e
source /Users/despiegk/.publisher/nvm.sh
set -e

if [ "false" = "true" ]; then
    nvm use --lts
    npm install
    rsync -ra --delete node_modules/ /Users/despiegk/.publisher/node_modules/
else
    rsync -ra --delete /Users/despiegk/.publisher/node_modules/ node_modules/ 
    nvm use --lts
    npm install
fi






set -e
cd /Users/despiegk/codewww/github/uhuru-me/www_uhuru

#need to ignore errors for getting nvm not sure why
set +e
source /Users/despiegk/.publisher/nvm.sh

set -e
nvm use --lts

export PATH=/Users/despiegk/.publisher/versions/node/v15.8.0/bin:$PATH

gridsome develop

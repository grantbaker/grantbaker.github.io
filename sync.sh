#!/bin/bash

git push origin master
#cp !(sync.sh) /keybase/public/grantbaker/
#rsync !(sync.sh) grba6061@elra-02.cs.colorado.edu:~/.www/

#find ./ -type f -maxdepth 1 ! -name sync.sh -exec cp -t /keybase/public/grantbaker/ {} +

rsync -v ./* /keybase/public/grantbaker/ --exclude sync.sh --exclude .git
rsync -v ./* grba6061@elra-02.cs.colorado.edu:~/.www/ --exclude sync.sh --exclude .git

#!/bin/bash

git push origin master
cp index.html /keybase/public/grantbaker/
rsync index.html grba6061@elra-02.cs.colorado.edu:~/.www/

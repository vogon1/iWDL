#!/bin/sh
#
# MkRel version @@version@@
#

rm -rf /tmp/iwdl
mkdir /tmp/iwdl

cp -p README.txt /tmp/iwdl/
cp -p INSTALL.txt /tmp/iwdl/
cp -p *.png /tmp/iwdl/
cp -rp css /tmp/iwdl/
cp -rp lib /tmp/iwdl/
cp -rp themes /tmp/iwdl/
cp -p iwdl_startup.png /tmp/iwdl/
cp -p iwdl.css /tmp/iwdl/

for f in index.html iwdl_settings.js.sample iwdl_lang_* iwdl.js
do
    sed -e "s/@@version@@/$1/g" < $f > /tmp/iwdl/$f
done

cp yuicompressor-2.4.2.jar /tmp/iwdl/

cd /tmp/iwdl/

cat lib/jqtouch.js lib/jqt.database.js lib/jquery.timers.js iwdl.js > tmp.js
java -jar yuicompressor-2.4.2.jar tmp.js > tmp.min.js

cat lib/jquery.1.3.2.min.js tmp.min.js lib/jquery.flot.min.js > all.min.js
rm tmp.js tmp.min.js

cat css/jqtouch.css themes/apple/theme.css iwdl.css > tmp.css
java -jar yuicompressor-2.4.2.jar tmp.css > all.min.css
rm tmp.css yuicompressor-2.4.2.jar

echo "Now edit /tmp/iwdl/index.html"

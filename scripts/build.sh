#!/bin/bash

rm -rf mobile/www/
cp -R source mobile/www/

pushd mobile/
../node_modules/cordova/bin/cordova prepare
popd
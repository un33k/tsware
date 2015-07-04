#!/usr/bin/env bash


git update-index --assume-unchanged utils/typings/app.d.ts
git update-index --assume-unchanged utils/typings/tsd.d.ts

npm install
bower install
tsd reinstall -os

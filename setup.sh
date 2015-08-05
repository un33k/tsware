#!/usr/bin/env bash

echo -e "Setting up your environment. Be patient!"
echo -e "========================================"
npm install
npm install tsd -g
tsd reinstall -os
bower install

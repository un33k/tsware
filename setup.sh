#!/usr/bin/env bash

echo -e "Setting up your environment. Be patient!\n"

npm install
bower install
tsd reinstall -os

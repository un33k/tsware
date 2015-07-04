#!/usr/bin/env bash

echo -e "Setting up your environment. Be patient!\n"
echo -e "========================================\n"
npm install
bower install
tsd reinstall -os

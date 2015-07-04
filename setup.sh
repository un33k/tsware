#!/usr/bin/env bash

echo -e "Setting up your environment. Be patient!"
echo -e "========================================"
npm install
bower install
tsd reinstall -os

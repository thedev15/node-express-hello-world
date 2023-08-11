#!/bin/bash

cd /home/ubuntu/node-express-hello-world
git pull origin master
pm2 reload

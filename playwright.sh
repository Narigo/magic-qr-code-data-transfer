#!/bin/bash

open -a XQuartz

IP=$(ipconfig getifaddr en0)
/usr/X11/bin/xhost + $IP

# Start the app in the background with an open shell
DISPLAY=${IP}:0 docker compose -f docker-compose.yml -f integration/docker-compose.playwright.yml up --build --detach

# Attach to the shell in the running container to allow working with NPM scripts
DISPLAY=${IP}:0 docker attach magic-qr-playwright

# Remove the container in the end after getting out of it.
docker container rm magic-qr-playwright

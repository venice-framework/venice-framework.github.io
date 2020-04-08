#!/bin/bash
# If you are getting permission errors, run `chmod +x jekyll.sh` to make this file executable.
# Run ./jekyll in your terminal.
#
# What the command does below is the following
# --rm removes the container when it stops
# --volume="$PWD:/srv/jekyll" maps the current working directory to /srv/jekyll inside the container
# -p 4000:4000 maps the localhost port 4000 to port 4000 inside the container
# -d runs the container in detached mode
# --name website will be the name of the container
# jekyll/jekyll:3.8 is the repo/tag, which is the image to create a container from 
# jekyll serve is the command to execute in the container. This makes the website available to view.
# 
# Navigate to localhost:4000 if you are developing locally.
# Navigate to YOUR_IP_ADDRESS:4000 if you are developing remotely.
docker run --rm --volume="$PWD:/srv/jekyll" -p 4000:4000 --name website -d jekyll/jekyll:3.8 jekyll serve

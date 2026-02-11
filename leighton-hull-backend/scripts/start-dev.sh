#!/bin/sh

# install dependencies
npm install

# do the migrations
npx prisma migrate deploy

# start the dev server
npm run docker:dev

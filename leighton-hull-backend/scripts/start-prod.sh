#!/bin/sh

# do the migrations
npx prisma migrate deploy

# start the dev server
npm run start

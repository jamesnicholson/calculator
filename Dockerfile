
FROM node:current-slim
#MAINTAINER James nicholson <jam3s.nicholson@gmail.com>
WORKDIR /apps/calculator
COPY package.json /apps/calculator
RUN yarn install
COPY . /apps/calculator
CMD ["yarn", "start"]
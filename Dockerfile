FROM node:14-alpine

RUN npm i -g npm

COPY package-lock.json /
COPY package.json /
COPY index.js /

RUN npm ci

ENTRYPOINT node index.js
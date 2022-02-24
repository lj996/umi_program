FROM node:14.17.5
COPY / /webapp
WORKDIR /webapp
RUN npm --version
RUN npm i yarn
RUN yarn --version
RUN yarn
RUN yarn run build
WORKDIR /dist
RUN ls
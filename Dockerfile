FROM node:14.17.5
COPY / /webapp
WORKDIR /webapp
RUN npm --version
RUN npm i -g yarn --registry=https://registry.npm.taobao.org
RUN yarn --version
RUN yarn
RUN yarn run build
WORKDIR /dist
RUN ls
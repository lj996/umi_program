FROM lj996/node14-yarn
COPY . /webapp
WORKDIR /webapp
RUN yarn --version
RUN node --version
RUN yarn
RUN yarn run build
RUN ls
WORKDIR /dist
RUN ls
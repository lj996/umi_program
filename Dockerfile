FROM lj996/node14-yarn
COPY . /webapp
WORKDIR /webapp
RUN yarn --version
RUN node --version
RUN yarn
RUN yarn run build
WORKDIR /webapp/dist
RUN ls
EXPOSE 3000
ENTRYPOINT yarn run server
FROM lj996/node14-yarn
COPY . /webapp
WORKDIR /webapp
RUN yarn --version
RUN node --version
RUN yarn
RUN yarn run build
RUN rm -f node_modules
RUN rm -f src
WORKDIR /webapp/dist
RUN ls
EXPOSE 3000
ENTRYPOINT yarn run server
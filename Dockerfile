FROM node:14.17.5
COPY . /webapp
WORKDIR /webapp
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN yarn --version
RUN yarn
RUN yarn run build
WORKDIR /dist
RUN cat index.html
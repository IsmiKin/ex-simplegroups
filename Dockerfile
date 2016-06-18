
FROM node:latest

MAINTAINER IsmiKin

# Make everything available for start
COPY . /opt/project/ex-simplegroups/
ADD package.json /opt/project/ex-simplegroups/package.json

# Install Dependencies
RUN npm install -g grunt-cli
RUN npm install -g bower

WORKDIR /opt/project/ex-simplegroups

# Install packages
RUN npm install

# Manually trigger bower. Why doesnt this work via npm install?
ADD .bowerrc /opt/project/ex-simplegroups/.bowerrc
ADD bower.json /opt/project/ex-simplegroups/bower.json
RUN bower install --config.interactive=false --allow-root

# currently only works for development
ENV NODE_ENV development


# Port 3000 for server
EXPOSE 3000 35729
CMD ["npm start"]

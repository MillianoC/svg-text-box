FROM node

MAINTAINER Chris Milliano

RUN apt-get update
RUN npm install -g pm2

ADD . genericLeaderBoard
WORKDIR genericLeaderBoard
RUN npm install

RUN pm2 start --name genericLeaderBoard app.js
RUN pm2 save
RUN pm2 startup

CMD ["pm2", "start", "app.js", "--no-daemon"]

FROM node:12
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /add
CMD node server.js
EXPOSE 8000

FROM node:16.13.0-alpine

WORKDIR /usr/app

COPY . .

RUN npm install

#RUN npm ci --only=production

RUN npm run build

CMD ["npm", "start"]
FROM node:16.13.0-alpine

EXPOSE 3000

ENV PORT=3000

WORKDIR /usr/app

COPY . .

RUN npm install

#RUN npm ci --only=production

RUN npm run build

CMD ["npm", "start"]
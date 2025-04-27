FROM node:20

WORKDIR /app

COPY StuDormPlusPlus/package*.json ./

RUN npm install

COPY StuDormPlusPlus/* .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "serve"]
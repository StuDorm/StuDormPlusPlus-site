FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY ./StuDormPlusPlus ./StuDormPlusPlus

WORKDIR /app/StuDormPlusPlus

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "serve"]
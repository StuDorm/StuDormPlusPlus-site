FROM node:18-alpine

WORKDIR /app

COPY StuDormPlusPlus/package.json StuDormPlusPlus/package-lock.json ./

RUN npm install

COPY StuDormPlusPlus/ ./

RUN npm run build

EXPOSE 80

CMD ["npm", "run", "dev"]
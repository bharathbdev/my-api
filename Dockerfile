FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=3000
ENV MONGODB_URI=mongodb://admin:admin@mongo:27017/mydatabase?authSource=admin

EXPOSE 3000

CMD ["node", "src/index.js"]
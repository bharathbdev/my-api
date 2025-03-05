FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=3000
ENV MONGODB_URI=mongodb://admin:admin@mongodb:27017/mydatabase

EXPOSE 3000

CMD ["node", "src/index.js"]
FROM node:20-alpine
WORKDIR /app
COPY package.json math.js test.js ./
CMD ["node", "test.js"]

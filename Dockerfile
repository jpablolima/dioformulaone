# 🔨 Build Stage
FROM node:20-alpine AS build-stage

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

RUN npm run dist


# 🚀 Production Stage
FROM node:20-alpine

WORKDIR /app

COPY --from=build-stage /app/dist ./dist
COPY --from=build-stage /app/package.json ./

RUN npm install --omit=dev

EXPOSE 3331

CMD ["node", "dist/server.js"]
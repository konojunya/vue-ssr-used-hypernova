FROM node:10-alpine

ENV PORT=5000

WORKDIR /app
RUN npm i -g yarn
COPY package.json yarn.lock ./
RUN yarn
COPY webpack ./webpack
COPY frontend ./frontend
RUN yarn build

EXPOSE 5000
CMD ["yarn", "start"]
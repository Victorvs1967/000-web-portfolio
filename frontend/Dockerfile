FROM node:18 AS build

RUN mkdir /home/app
WORKDIR /home/app

RUN npm install -g @angular/cli

# install dependencies first, in a different location for easier app bind mounting for local development
COPY package.json package-lock.json ./
# RUN npm install --omit=optional --legacy-peer-deps && npm cache clean --force
RUN npm ci
ENV PATH="/home/app/node_modules/.bin:$PATH"

COPY . .
RUN ng build

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /home/app/dist /usr/share/nginx/html

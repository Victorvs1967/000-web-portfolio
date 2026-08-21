FROM node:24.14 AS build

RUN mkdir /home/app
WORKDIR /home/app

RUN npm install -g @angular/cli

# install dependencies first, in a different location for easier app bind mounting for local development
COPY package.json package-lock.json ./
RUN npm install --omit=optional --legacy-peer-deps && npm cache clean --force
ENV PATH="/home/app/node_modules/.bin:$PATH"

COPY . .
RUN ng build

FROM nginx:latest
COPY --from=build /home/app/dist/browser /usr/share/nginx/html
COPY --from=build /home/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]

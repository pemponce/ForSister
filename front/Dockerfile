FROM node:alpine
WORKDIR /usr/app/front
EXPOSE 80
COPY ./ ./
RUN npm install
RUN npm run build
CMD ["npm", "start"]

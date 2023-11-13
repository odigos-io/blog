# Uses node as the base image
FROM node:21-alpine 
# Sets up our working directory as /app inside the container.
WORKDIR /app
# Copyies package json files.
COPY package.json package-lock.json ./
# Installs the dependencies from the package.json
RUN npm install --production
# Copies current directory files into the docker environment
COPY . .
# Expose port 3000 as our server uses it.
EXPOSE 3000
# Finally runs the server.
CMD ["node", "index.js"]
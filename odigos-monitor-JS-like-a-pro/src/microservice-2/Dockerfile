FROM node:18

# Use /usr/src/app as the working directory
WORKDIR /usr/src/app

# Copy package files and install production dependencies
COPY --chown=node:node package*.json /usr/src/app
RUN npm install --production

# Copy the rest of the files
COPY --chown=node:node . /usr/src/app/

# Switch to user node with limited permissions
USER node

# Expose the application port
EXPOSE 3002

# Set the default command to run the application
CMD ["node", "index.js"]

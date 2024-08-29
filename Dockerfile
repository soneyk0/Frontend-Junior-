# Use an official Node.js runtime as the base image
FROM node:20-alpine3.19

# Set the working directory inside the container
WORKDIR /app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 80

# Define the command to run your app (start script in package.json)
CMD ["npm", "run", "start", "react-scripts"]
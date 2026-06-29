# backend/Dockerfile

# Use Node.js LTS as base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the backend code
COPY . .

# Build the NestJS app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the backend
CMD ["npm", "run", "start:dev"]

# Stage 1: Build Angular application
FROM node:14-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Copy the rest of the application code into the container
COPY . .

# Build the Angular application
RUN npm run build --prod

# Stage 2: Final image with built Angular app
FROM nginx:alpine

# Copy built Angular app from the build stage into the nginx server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to start the nginx server
CMD ["nginx", "-g", "daemon off;"]

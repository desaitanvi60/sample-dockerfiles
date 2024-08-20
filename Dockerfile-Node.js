# Use an official Node.js runtime as a parent image
FROM node:18-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Install production dependencies only
COPY package*.json ./
RUN npm install --only=production

# Copy application source code
COPY . .

# Build the application (if applicable, for example, in a React app)
# RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Set the environment variable for the application
ENV NODE_ENV=production

# Start the application
CMD ["node", "app.js"]

# Optionally define health check
# HEALTHCHECK --interval=30s --timeout=10s \
#   CMD curl -f http://localhost:3000/health || exit 1


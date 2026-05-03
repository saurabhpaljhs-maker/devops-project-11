# Step 1: Base image
FROM node:16-alpine

# Step 2: Working directory
WORKDIR /usr/src/app

# Step 3: Copy dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy source code
COPY . .

# Step 5: Port expose
EXPOSE 3000

# Step 6: Start the app
CMD ["npm", "start"]
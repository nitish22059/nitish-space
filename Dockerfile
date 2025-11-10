# ---------- Stage 1: Build the Vite app ----------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app (Vite output goes to /dist)
RUN npm run build

# ---------- Stage 2: Serve the app ----------
FROM node:20-alpine AS runner

WORKDIR /app

# Install a lightweight static file server
RUN npm install -g serve

# Copy built assets from builder
COPY --from=builder /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Run the server
CMD ["serve", "-s", "dist", "-l", "3000"]

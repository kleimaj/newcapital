# STEP 1 build static website
FROM node:20.2-alpine3.16 as builder
RUN npm install -g npm@9.7.1
RUN mkdir app

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json /app/
RUN cd /app && npm set progress=false && npm install --legacy-peer-deps
# Copy project files into the docker image
COPY .  /app
RUN cd /app && ls -l && pwd && npm run build

# STEP 2 build a small nginx image with static website
FROM nginx:alpine
# Copy config file
## Remove default nginx website
RUN rm -rf /var/www/*
## From 'builder' copy website to default nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]

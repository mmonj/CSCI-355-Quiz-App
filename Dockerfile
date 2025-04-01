FROM node:22.3.0

WORKDIR /app

ARG ENV_TYPE

COPY package.json package-lock.jso[n] ./

# install dependencies
RUN if [ "$ENV_TYPE" = "dev" ]; then \
        npm ci \
    ;elif [ "$ENV_TYPE" = "prod" ]; then \
        npm ci --only=production \
    ;fi
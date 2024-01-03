FROM node:18.17.0-alpine
RUN apk add --no-cache \
  make g++ && \
  apk add vips-dev fftw-dev --update-cache \
  && rm -fR /var/cache/apk/*
WORKDIR /app
COPY . .
CMD yarn install; yarn dev
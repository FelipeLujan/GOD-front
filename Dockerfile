FROM node:alpine AS builder
WORKDIR /app
COPY . ./
RUN yarn && yarn build
FROM node:alpine
RUN yarn global add serve
WORKDIR /app
EXPOSE 80
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]

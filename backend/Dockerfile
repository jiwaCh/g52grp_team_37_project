FROM node:12-alpine AS server-builder
WORKDIR /usr/app/src
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:12-alpine
WORKDIR /usr/app
COPY --from=server-builder /usr/app/src/package.json .
COPY --from=server-builder /usr/app/src/yarn.lock .
COPY --from=server-builder /usr/app/src/lib ./lib
RUN yarn install --frozen-lockfile --production=true
EXPOSE 3000
ENV PORT 3000
ENV production true
CMD ["node", "./lib/index.js"]

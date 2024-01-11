FROM node:21-alpine3.18 as base


FROM base as builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json /app/
RUN npm ci

COPY . .
RUN npm run build

FROM base as runner
WORKDIR /app
RUN apk add --no-cache libc6-compat

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

CMD [ "node" ,"dist/main.js"]


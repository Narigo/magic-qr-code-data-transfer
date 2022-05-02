ARG BASE_IMAGE=node:16

FROM ${BASE_IMAGE}

RUN corepack enable
RUN corepack prepare pnpm@7.0.0 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml /app/
RUN pnpm install

ARG BASE_IMAGE=node:16

FROM ${BASE_IMAGE}

RUN corepack enable
RUN corepack prepare pnpm@7.0.0-rc.8 --activate

WORKDIR /app

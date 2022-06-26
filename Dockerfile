ARG BASE_IMAGE=node:18

FROM ${BASE_IMAGE}
WORKDIR /app
RUN corepack enable
RUN corepack prepare pnpm@7.0.0 --activate
COPY package.json pnpm-lock.yaml /app/
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install
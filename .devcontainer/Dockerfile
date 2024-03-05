FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:18 as base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base as dependencies
WORKDIR /app
COPY ../package.json ./
RUN pnpm install

FROM base
COPY .. /app
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
EXPOSE 5173
CMD [ "pnpm", "dev" ]
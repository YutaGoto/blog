FROM oven/bun:1 as base
WORKDIR /app
COPY package.json ./
COPY bun.lockb ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["/usr/sbin/nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]

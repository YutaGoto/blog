FROM node:26.13.1 as base
WORKDIR /app
COPY package.json ./
COPY bun.lockb ./

RUN npm i -g bun@1.4.3
RUN apt-get update && apt-get install -y --no-install-recommends \
  build-essential=12.12 \
  python3=3.13.5-1 \
  python3-pip=25.1.1+dfsg-1 \
  python3-setuptools=78.1.1-0.1 \
  python3-wheel=0.46.1-2 \
  make=4.4.1-2 \
  g++=4:14.2.0-1 \
  && rm -rf /var/lib/apt/lists/*

RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM nginx:stable AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["/usr/sbin/nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]

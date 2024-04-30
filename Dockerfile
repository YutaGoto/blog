FROM node:20 as base
WORKDIR /app
COPY package.json ./
COPY bun.lockb ./

RUN npm i -g bun
RUN apt-get update && apt-get install -y \
  build-essential \
  python3 \
  python3-pip \
  python3-setuptools \
  python3-wheel \
  make g++ \
  && rm -rf /var/lib/apt/lists/*

RUN bun --version
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM nginx:stable AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["/usr/sbin/nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]

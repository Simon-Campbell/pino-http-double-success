# 1. Build + Run Container

```sh
docker build . -t pino-http-test
docker run -p 3000:3000 pino-http-test
```

# 2. Probe in cURL

`curl http://localhost:3000`

# 3. Probe in Edge

`msedge http://localhost:3000`

# 4. Probe in Insomnia

...

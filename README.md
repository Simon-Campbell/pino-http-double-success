# 1. Build + Run Container

docker build . -t pino-http-test 
docker run -p 3000:3000 pino-http-test
```

# 2. Probe w/ cURL
curl http://localhost:3000

# Image
![Image Demonstrating Isuse](issue.png)

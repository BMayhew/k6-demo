# K6 Demo

Open API Spec 3 file - <https://httpbin.test.k6.io/spec.json>

<https://k6.io/blog/load-testing-your-api-with-swagger-openapi-and-k6/#api-load-testing-with-swaggeropenapi-specification>

```bash
# Pull the docker image to generate k5 scripts from the openapi spec
docker pull openapitools/openapi-generator-cli

# Generate the k6 scripts from the openapi spec
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
    -i https://httpbin.test.k6.io/spec.json \
    -g k6 \
    -o /local/k6-test/ --skip-validate-spec
```

After running the above commands, you should see a `k6-test` I've committed it to the repo with no changes for reference.

API Docs: <https://httpbin.test.k6.io/>

## Install

Follow the [docs](https://k6.io/docs/get-started/installation/) to complete the install for your system.

For macos `brew install k6`

## Running Example Scripts

### Runs with options passed in through CLI

`k6 run --vus 10 --duration 30s script.js`

### Runs with no options in CLI

`k6 run scriptWithOptions.js`


## Ability to run scripts locally, distributed, or in the cloud


<https://k6.io/docs/get-started/running-k6/#execution-modes>

### K6 Resources

<https://k6.io/docs/get-started/resources/>



<https://github.com/grafana/har-to-k6>
<https://k6.io/blog/load-testing-your-api-with-swagger-openapi-and-k6/>
<https://github.com/apideck-libraries/postman-to-k6>

Browser testing with K6 - <https://dev.to/yusuftayman/efficiently-tracking-frontend-performance-with-xk6-browser-and-slack-integration-37ab>

K6 to Slack Reporter - <https://medium.com/geekculture/k6-custom-slack-integration-metrics-are-the-magic-of-tests-527aaf613595>


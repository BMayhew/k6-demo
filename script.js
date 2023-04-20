import http from "k6/http";
import { check } from "k6";
import { Counter } from "k6/metrics";

// Reporters
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

let successfulGets = new Counter("successful_gets");

export default function () {
  const res = http.get("https://test.k6.io/news.php");

  let checkRes = check(res, {
    "is status 200": (r) => r.status === 200,
  });

  successfulGets.add(checkRes);
}

export function handleSummary(data) {
  return {
    "result.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}

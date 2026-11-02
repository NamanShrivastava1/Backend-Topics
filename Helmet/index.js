const express = require("express");
const helmet = require("helmet");
const app = express();

app.use(helmet());

app.get("/", (req, res) => {
  res.send("This is the Demo page for" + " setting up express server !");
});

// Before Helmet (Network tab in Response Headers)
// HTTP/1.1 304 Not Modified
// X-Powered-By: Express
// ETag: W/"35-QqeUaYjSJ35gtyT3DcgtpQlitTU"
// Date: Thu, 04 Jun 2020 15:55:00 GMT
// Connection: keep-alive

// After Helmet (Network tab in Response Headers)
// HTTP/1.1 304 Not Modified
// Content-Security-Policy: default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests
// Cross-Origin-Opener-Policy: same-origin
// Cross-Origin-Resource-Policy: same-origin
// Origin-Agent-Cluster: ?1
// Referrer-Policy: no-referrer
// Strict-Transport-Security: max-age=31536000; includeSubDomains
// X-Content-Type-Options: nosniff
// X-DNS-Prefetch-Control: off
// X-Download-Options: noopen
// X-Frame-Options: SAMEORIGIN
// X-Permitted-Cross-Domain-Policies: none
// X-XSS-Protection: 0
// ETag: W/"35-QqeUaYjSJ35gtyT3DcgtpQlitTU"
// Date: Mon, 02 Nov 2026 13:11:22 GMT
// Connection: keep-alive
// Keep-Alive: timeout=5

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server started at port 3000");
  }
});

# WeChat Pay
This is the repo for Wechat payment service.

Refer to

[wechatpay-node-v3-ts](https://github.com/klover2/wechatpay-node-v3-ts)

[Tsoa](https://tsoa-community.github.io/docs/getting-started.html)

[H5下单API](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_3_1.shtml)
## Requirements

- Node.js (version 12 to 16 should work. Tested on v12 and v16.)
- [Yarn](https://yarnpkg.com/getting-started/install)

## Getting Started

1. Clone the repo.
2. Create file ```.env``` and populate with values required.
3. ```yarn install```
4. ```yarn build```
5. ```yarn dev```

## Documentation

To access the full swagger docs use the backend endpoint [http://localhost:8080/docs/#/](http://localhost:8080/docs/#/).

## Docker run
1. ```docker build --platform linux/amd64 -t wxpay .```
2. ```docker run -p 8080:8080 --name wxpay -e WXPAY_APPID=xxx -e WXPAY_MCHID=xxx -e NODE_ENV=development -d wxpay```

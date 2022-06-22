FROM node:14-buster

WORKDIR /usr/src/app

# BUILD

COPY . ./

ENV PORT=8080
ENV WXPAY_APPID=$WXPAY_APPID
ENV WXPAY_MCHID=$WXPAY_MCHID

RUN yarn install --frozen-lockfile && yarn build

# RUN

WORKDIR /usr/src/app

ENV NODE_ENV=$NODE_ENV

CMD [ "node", "./build/index.js" ]

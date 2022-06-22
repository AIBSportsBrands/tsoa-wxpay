import moize from 'moize';
import WxPay from 'wechatpay-node-v3';
import fs from 'fs';
import { WxPayClient } from '../../clients/wxpay-api';
import { getEnvVar } from '../../env';

const getWxPayApi = () => (
  {
    wxpay: new WxPay({
      appid: getEnvVar('WXPAY_APPID'),
      mchid: getEnvVar('WXPAY_MCHID'),
      publicKey: fs.readFileSync('./apiclient_cert.pem'), // 公钥
      privateKey: fs.readFileSync('./apiclient_key.pem'), // 秘钥
    }),
  }
);

export const getWxPayApiClient = moize(() => {
  const api = getWxPayApi();
  return new WxPayClient(api.wxpay);
});

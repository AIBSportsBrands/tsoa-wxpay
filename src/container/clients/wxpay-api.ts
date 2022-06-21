import moize from 'moize';
import WxPay from 'wechatpay-node-v3';
import fs from 'fs';
import { WxPayClient } from '../../clients/wxpay-api';
import { getEnvVar } from '../../env';

const getWxPayApi = () => (
  {
    endpoint: getEnvVar('WXPAY_H5_URL'),
    wxpay: new WxPay({
      appid: '直连商户申请的公众号或移动应用appid',
      mchid: '商户号',
      publicKey: fs.readFileSync('./apiclient_cert.pem'), // 公钥
      privateKey: fs.readFileSync('./apiclient_key.pem'), // 秘钥
    }),
  }
);

export const getWxPayApiClient = moize(() => {
  const api = getWxPayApi();
  return new WxPayClient(api.endpoint, api.wxpay);
});

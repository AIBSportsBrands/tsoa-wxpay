import { Headers } from 'got';
import WxPay from 'wechatpay-node-v3';
import { H5PayRequest } from './types';

export class WxPayClient {
  readonly wxpay: WxPay;

  getHeaders(authorization: string): Headers {
    return {
      Authorization: authorization,
    };
  }

  constructor(wxpay: WxPay) {
    this.wxpay = wxpay;
  }

  async h5Pay(req: H5PayRequest): Promise<Record<string, any>> {
    return this.wxpay.transactions_h5(req);
  }
}

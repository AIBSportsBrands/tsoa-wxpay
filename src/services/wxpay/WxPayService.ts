import { IwxPayService } from './types';
import { WxPayClient } from '../../clients/wxpay-api';
import { H5PayRequest } from '../../clients/wxpay-api/types';

export class WxPayService implements IwxPayService {
  readonly wxPayApi: WxPayClient;

  constructor(wxPayApi: WxPayClient) {
    this.wxPayApi = wxPayApi;
  }

  h5Pay(req: H5PayRequest): Promise<Record<string, any>> {
    return this.wxPayApi.h5Pay(req);
  }
}

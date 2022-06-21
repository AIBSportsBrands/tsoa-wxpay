import {IwxPayService} from './types';
import {WxPayClient} from '../../clients/wxpay-api';
import {WxPayServiceError} from './WxPayServiceError';
import {rethrowAsServiceError} from '../utils';
import {H5PayRequest} from '../../clients/wxpay-api/types';

export class WxPayService implements IwxPayService{
    readonly wxPayApi: WxPayClient;

    constructor(wxPayApi: WxPayClient) {
        this.wxPayApi = wxPayApi;
    }

    h5Pay(req: H5PayRequest): Promise<any> {
        try{
            return this.wxPayApi.h5Pay(req);
        } catch (error: any) {
            // TODO, don't need to do this
            rethrowAsServiceError(WxPayServiceError, error);
        }
    }

}

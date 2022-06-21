import { httpClient } from '../http-client';
import {HTTPError} from 'got';
import {H5PayRequest} from './types';
import WxPay from 'wechatpay-node-v3';
import { Headers } from 'got';


export class WxPayClient {
    readonly h5PayUrl: string;
    readonly wxpay: WxPay;

    getHeaders(authorization: string): Headers {
        return {
            Authorization: authorization,
        };
    }

    constructor( h5PayUrl: string, wxpay: WxPay ) {
        this.h5PayUrl = h5PayUrl.replace(/\/$/, '');
        this.wxpay = wxpay;
    }

    async h5Pay(req: H5PayRequest): Promise<any> {

        const endpoint = `${this.h5PayUrl}`;
        const nonce_str = Math.random().toString(36).substr(2, 15);
        const timestamp = parseInt(+new Date() / 1000 + '').toString();
        const url = '/v3/pay/transactions/h5';
        const signature = this.wxpay.getSignature('POST', nonce_str, timestamp, url, req);
        const authorization = this.wxpay.getAuthorization(nonce_str, timestamp, signature);
        const headers: Headers = this.getHeaders(authorization);
        try {
            const res = await httpClient.post(endpoint, {json: req, headers});
            console.log(res);
        } catch (error: any) {
            if (error instanceof HTTPError) {
                const {response: { statusCode } } = error;
                if (statusCode === 500){ // Todo change to switch!

                }
                throw error;
            }
        }
    }
}

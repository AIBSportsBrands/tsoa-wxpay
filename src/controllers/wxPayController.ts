import { Controller } from 'tsoa';
import { Body, Post, Route } from 'tsoa';
import { getWxPayService } from '../container/services/wxpay';
import { H5PayRequest } from '../clients/wxpay-api/types';

const wxPayService = getWxPayService();

@Route('wxpay')
export class WxPayController extends Controller {
  @Post('h5')
  async h5Pay(@Body() req: H5PayRequest): Promise<Record<string, any>> {
    console.log(req);
    return wxPayService.h5Pay(req);
  }
}

import moize from 'moize';
import { WxPayService } from '../../services/wxpay';
import { getWxPayApiClient } from '../clients/wxpay-api';

export const getWxPayService = moize(() => new WxPayService(
  getWxPayApiClient(),
));

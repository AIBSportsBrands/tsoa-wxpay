import { H5PayRequest } from '../../clients/wxpay-api/types';

export interface IwxPayService {
  h5Pay(req: H5PayRequest): Promise<any>;
}

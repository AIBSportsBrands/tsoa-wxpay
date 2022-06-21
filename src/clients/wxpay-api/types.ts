export interface H5PayRequest {
    appid: string,
    mchid: string,
    description: string,
    out_trade_no: string,
    attach: string,
    notify_url: string,
    amount: amount,
    scene_info: scene_info,
}

interface amount {
    total: number,
    currency: string,
}

interface scene_info {
    payer_client_ip: string,
    device_id: string,
    h5_info: h5_info,
}

interface h5_info {
    type: string,
    app_name: string,
    app_url: string,
}


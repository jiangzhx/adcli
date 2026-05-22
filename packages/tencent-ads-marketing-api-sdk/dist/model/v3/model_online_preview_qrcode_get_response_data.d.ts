import type { ViewerIdType } from "../v3/index";
export interface OnlinePreviewQrcodeGetResponseData {
    qrcode_url?: string;
    expiration_time?: number;
    user_id_type?: ViewerIdType;
}

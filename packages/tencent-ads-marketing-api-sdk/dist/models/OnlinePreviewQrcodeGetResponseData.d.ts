import type { ViewerIdType } from "../models";
export interface OnlinePreviewQrcodeGetResponseData {
    qrcode_url?: string;
    expiration_time?: number;
    user_id_type?: ViewerIdType;
}

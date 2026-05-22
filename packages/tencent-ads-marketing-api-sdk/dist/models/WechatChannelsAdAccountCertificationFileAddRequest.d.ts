import type { FileType } from "../models";
export interface WechatChannelsAdAccountCertificationFileAddRequest {
    account_id?: number | string;
    signature?: string;
    file_bytes?: string;
    file_name?: string;
    file_type?: FileType;
}

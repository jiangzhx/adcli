import type { ApiErrorStruct, WechatChannelsAdAccountCertificationFileAddResponseData } from "../models";
export interface WechatChannelsAdAccountCertificationFileAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAdAccountCertificationFileAddResponseData;
}

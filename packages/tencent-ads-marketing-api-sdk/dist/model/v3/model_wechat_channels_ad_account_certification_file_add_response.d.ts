import type { ApiErrorStruct, WechatChannelsAdAccountCertificationFileAddResponseData } from "../v3/index";
export interface WechatChannelsAdAccountCertificationFileAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAdAccountCertificationFileAddResponseData;
}

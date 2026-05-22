import type { BidUrl, Rule } from "../v3/index";
export interface RtaInfoGetResponseData {
    RtaId?: number | string;
    RtaName?: string;
    RtaCompanyName?: string;
    QpsLimit?: number;
    CacheTime?: number;
    Enable?: number;
    rules?: Rule[];
    bidurls?: BidUrl[];
}

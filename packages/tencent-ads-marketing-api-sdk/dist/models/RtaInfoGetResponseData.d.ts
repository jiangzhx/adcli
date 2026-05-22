import type { BidUrl, Rule } from "../models";
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

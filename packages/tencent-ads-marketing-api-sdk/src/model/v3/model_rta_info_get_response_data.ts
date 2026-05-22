// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_rta_info_get_response_data.go
// Do not edit manually.

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


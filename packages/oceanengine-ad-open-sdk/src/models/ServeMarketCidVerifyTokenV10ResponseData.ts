// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ServeMarketCidVerifyTokenV10DataCidCapacityStatus, ServeMarketCidVerifyTokenV10DataDevStatus, ServeMarketCidVerifyTokenV10DataFacilitatorSubStatus } from "../models";

export interface ServeMarketCidVerifyTokenV10ResponseData {
  app_access_token: string;
  cid_capacity_status?: ServeMarketCidVerifyTokenV10DataCidCapacityStatus;
  dev_qualification_name?: string;
  dev_status?: ServeMarketCidVerifyTokenV10DataDevStatus;
  facilitator_sub_status?: ServeMarketCidVerifyTokenV10DataFacilitatorSubStatus;
  token_is_valid?: boolean;
}


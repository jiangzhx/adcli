// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarInfoV2DataInfoListStatus, StarInfoV2ResponseDataInfoListInnerFirstInfo, StarInfoV2ResponseDataInfoListInnerSecondInfo } from "../models";

export interface StarInfoV2ResponseDataInfoListInner {
  category_id: number;
  company_id: number;
  company_name: string;
  create_time: number;
  first_info: StarInfoV2ResponseDataInfoListInnerFirstInfo;
  second_info: StarInfoV2ResponseDataInfoListInnerSecondInfo;
  start_id: number;
  start_name: string;
  status: StarInfoV2DataInfoListStatus;
}


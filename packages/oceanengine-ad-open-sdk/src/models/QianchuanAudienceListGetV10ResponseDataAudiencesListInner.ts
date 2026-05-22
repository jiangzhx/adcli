// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAudienceListGetV10DataAudiencesListAudienceSource, QianchuanAudienceListGetV10DataAudiencesListAudienceType } from "../models";

export interface QianchuanAudienceListGetV10ResponseDataAudiencesListInner {
  audience_group?: string;
  audience_id?: number;
  audience_name?: string;
  audience_source?: QianchuanAudienceListGetV10DataAudiencesListAudienceSource;
  audience_type?: QianchuanAudienceListGetV10DataAudiencesListAudienceType;
  create_time?: string;
  push_product?: string;
  status?: number;
  stock_num?: number;
  stock_status?: number;
}


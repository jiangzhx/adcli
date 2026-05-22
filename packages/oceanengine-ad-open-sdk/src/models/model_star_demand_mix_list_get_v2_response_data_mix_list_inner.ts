// Generated from oceanengine/ad_open_sdk_go models/model_star_demand_mix_list_get_v2_response_data_mix_list_inner.go
// Do not edit manually.

import type { StarDemandMixListGetV2ResponseDataMixListInnerAuthorInfo, StarDemandMixListGetV2ResponseDataMixListInnerBaseInfo } from "../models/index";

export interface StarDemandMixListGetV2ResponseDataMixListInner {
  author_info?: StarDemandMixListGetV2ResponseDataMixListInnerAuthorInfo;
  base_info?: StarDemandMixListGetV2ResponseDataMixListInnerBaseInfo;
  bill_indicator_agg_data?: Record<string, number>;
  item_seq_agg_data?: Record<string, number>;
}


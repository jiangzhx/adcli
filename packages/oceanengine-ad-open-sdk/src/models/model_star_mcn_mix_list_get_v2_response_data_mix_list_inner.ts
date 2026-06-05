// 由 oceanengine/ad_open_sdk_go models/model_star_mcn_mix_list_get_v2_response_data_mix_list_inner.go 生成
// 不要手动编辑。

import type { StarMcnMixListGetV2ResponseDataMixListInnerAuthorInfo, StarMcnMixListGetV2ResponseDataMixListInnerBaseInfo } from "../models/index";

export interface StarMcnMixListGetV2ResponseDataMixListInner {
  author_info?: StarMcnMixListGetV2ResponseDataMixListInnerAuthorInfo;
  base_info?: StarMcnMixListGetV2ResponseDataMixListInnerBaseInfo;
  bill_indicator_agg_data?: Record<string, number>;
  item_seq_agg_data?: Record<string, number>;
}


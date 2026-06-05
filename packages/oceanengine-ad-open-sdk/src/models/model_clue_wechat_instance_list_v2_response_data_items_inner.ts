// 由 oceanengine/ad_open_sdk_go models/model_clue_wechat_instance_list_v2_response_data_items_inner.go 生成
// 不要手动编辑。

import type { ClueWechatInstanceListV2DataItemsSubType } from "../models/index";

export interface ClueWechatInstanceListV2ResponseDataItemsInner {
  clue_count?: number;
  create_time?: string;
  instance_id?: number | string;
  mod_time?: string;
  name?: string;
  sub_type?: ClueWechatInstanceListV2DataItemsSubType;
}


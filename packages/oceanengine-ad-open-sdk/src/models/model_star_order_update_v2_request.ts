// 由 oceanengine/ad_open_sdk_go models/model_star_order_update_v2_request.go 生成
// 不要手动编辑。

import type { StarOrderUpdateV2RequestOrderInfoChanges } from "../models/index";

export interface StarOrderUpdateV2Request {
  order_id: number | string;
  order_info_changes?: StarOrderUpdateV2RequestOrderInfoChanges;
  star_id: number | string;
}


// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_product_available_get_v1_0_filter.go 生成
// 不要手动编辑。

import type { QianchuanProductAvailableGetV10FilterMarketingScene, QianchuanProductAvailableGetV10FilterTab } from "../models/index";

export interface QianchuanProductAvailableGetV10Filter {
  is_adlab?: boolean;
  marketing_scene?: QianchuanProductAvailableGetV10FilterMarketingScene;
  product_ids?: (number | string)[];
  product_name?: string;
  tab?: QianchuanProductAvailableGetV10FilterTab;
}


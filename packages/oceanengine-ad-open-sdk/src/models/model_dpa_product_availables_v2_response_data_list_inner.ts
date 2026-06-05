// 由 oceanengine/ad_open_sdk_go models/model_dpa_product_availables_v2_response_data_list_inner.go 生成
// 不要手动编辑。

import type { DpaProductAvailablesV2DataListAccountType, DpaProductAvailablesV2DataListProductIndustry } from "../models/index";

export interface DpaProductAvailablesV2ResponseDataListInner {
  account_id?: number | string;
  account_type?: DpaProductAvailablesV2DataListAccountType;
  name?: string;
  platform_id?: number | string;
  product_industry?: DpaProductAvailablesV2DataListProductIndustry;
}


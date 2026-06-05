// 由 oceanengine/ad_open_sdk_go models/model_dpa_asset_v2_list_v2_request.go 生成
// 不要手动编辑。

import type { DpaAssetV2ListV2RequestFiltering } from "../models/index";

export interface DpaAssetV2ListV2Request {
  advertiser_id: number | string;
  filtering?: DpaAssetV2ListV2RequestFiltering;
  page?: number;
  page_size?: number;
  unique_product_ids: (number | string)[];
}


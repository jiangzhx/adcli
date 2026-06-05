// 由 oceanengine/ad_open_sdk_go models/model_star_brand_list_v2_response_data_brands_inner.go 生成
// 不要手动编辑。

import type { StarBrandListV2ResponseDataBrandsInnerYuntuIndustryInner } from "../models/index";

export interface StarBrandListV2ResponseDataBrandsInner {
  brand_id: number | string;
  brand_name: string;
  yuntu_brand_id?: number | string;
  yuntu_industry?: StarBrandListV2ResponseDataBrandsInnerYuntuIndustryInner[];
}


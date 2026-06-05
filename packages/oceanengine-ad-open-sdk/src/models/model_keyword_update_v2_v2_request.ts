// 由 oceanengine/ad_open_sdk_go models/model_keyword_update_v2_v2_request.go 生成
// 不要手动编辑。

import type { KeywordUpdateV2V2RequestKeywordsInner } from "../models/index";

export interface KeywordUpdateV2V2Request {
  ad_id: number | string;
  advertiser_id: number | string;
  keywords: KeywordUpdateV2V2RequestKeywordsInner[];
}


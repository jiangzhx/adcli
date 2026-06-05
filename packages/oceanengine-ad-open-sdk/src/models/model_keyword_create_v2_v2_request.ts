// 由 oceanengine/ad_open_sdk_go models/model_keyword_create_v2_v2_request.go 生成
// 不要手动编辑。

import type { KeywordCreateV2V2RequestKeywordsInner } from "../models/index";

export interface KeywordCreateV2V2Request {
  ad_id: number | string;
  advertiser_id: number | string;
  keywords: KeywordCreateV2V2RequestKeywordsInner[];
}


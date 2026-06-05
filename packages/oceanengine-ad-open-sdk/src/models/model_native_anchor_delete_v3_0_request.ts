// 由 oceanengine/ad_open_sdk_go models/model_native_anchor_delete_v3_0_request.go 生成
// 不要手动编辑。

import type { NativeAnchorDeleteV30AnchorType } from "../models/index";

export interface NativeAnchorDeleteV30Request {
  advertiser_id?: number | string;
  anchor_id?: string;
  anchor_type?: NativeAnchorDeleteV30AnchorType;
}


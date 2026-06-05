// 由 oceanengine/ad_open_sdk_go models/model_file_video_update_v2_request.go 生成
// 不要手动编辑。

import type { FileVideoUpdateV2RequestVideosInner } from "../models/index";

export interface FileVideoUpdateV2Request {
  advertiser_id: number | string;
  videos?: FileVideoUpdateV2RequestVideosInner[];
}


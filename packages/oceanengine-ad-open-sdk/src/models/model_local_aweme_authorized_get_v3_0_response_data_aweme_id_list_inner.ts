// 由 oceanengine/ad_open_sdk_go models/model_local_aweme_authorized_get_v3_0_response_data_aweme_id_list_inner.go 生成
// 不要手动编辑。

import type { LocalAwemeAuthorizedGetV30DataAwemeIdListAuthType } from "../models/index";

export interface LocalAwemeAuthorizedGetV30ResponseDataAwemeIdListInner {
  auth_type?: LocalAwemeAuthorizedGetV30DataAwemeIdListAuthType;
  aweme_avatar?: string;
  aweme_has_uni_prom?: boolean;
  aweme_id?: string;
  aweme_name?: string;
  can_create_roi2_ad?: boolean;
  have_delivering_roi2_ad?: boolean;
}


// Generated from github.com/bububa/kwai-marketing-api/model/page/cid_info_update.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface CidInfoUpdateRequestInit {
  advertiser_id?: KuaishouId;
  page_id?: string;
  plat_form_type?: string;
  deeplink_url?: string;
  fallback_h5_url?: string;
}

export class CidInfoUpdateRequest implements PostRequest, CidInfoUpdateRequestInit {
  advertiser_id?: KuaishouId;
  page_id?: string;
  plat_form_type?: string;
  deeplink_url?: string;
  fallback_h5_url?: string;

  constructor(init: CidInfoUpdateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.page_id = init.page_id;
    this.plat_form_type = init.plat_form_type;
    this.deeplink_url = init.deeplink_url;
    this.fallback_h5_url = init.fallback_h5_url;
  }

  path() {
    return "gw/magicsite/v1/page/cid/info/update";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      page_id: this.page_id,
      plat_form_type: this.plat_form_type,
      deeplink_url: this.deeplink_url,
      fallback_h5_url: this.fallback_h5_url,
    });
  }
}

export interface CidInfoUpdateResponse {
  page_id?: KuaishouId;
}

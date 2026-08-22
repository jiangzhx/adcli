// Generated from github.com/bububa/kwai-marketing-api/model/dsp/native/open_account_native.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface OpenAccountNativeRequestInit {
  advertiser_id?: KuaishouId;
  open_account_native?: number;
}

export class OpenAccountNativeRequest implements PostRequest, OpenAccountNativeRequestInit {
  advertiser_id?: KuaishouId;
  open_account_native?: number;

  constructor(init: OpenAccountNativeRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.open_account_native = init.open_account_native;
  }

  path() {
    return "gw/dsp/native/openAccountNative";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      open_account_native: this.open_account_native,
    });
  }
}

export interface OpenAccountNativeResponse {
  open_account_native?: boolean;
}

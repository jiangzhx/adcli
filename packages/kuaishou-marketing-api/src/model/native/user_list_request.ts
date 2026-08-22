// Generated from github.com/bububa/kwai-marketing-api/model/native/user_list_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface UserListRequestInit {
  advertiser_id?: KuaishouId;
  kol_user_type?: number[];
}

export class UserListRequest implements PostRequest, UserListRequestInit {
  advertiser_id?: KuaishouId;
  kol_user_type?: number[];

  constructor(init: UserListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.kol_user_type = init.kol_user_type;
  }

  path() {
    return "gw/dsp/v1/native/user/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      kol_user_type: this.kol_user_type,
    });
  }
}

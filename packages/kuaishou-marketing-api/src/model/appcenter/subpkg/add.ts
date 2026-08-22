// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/subpkg/add.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface AddRequestInit {
  advertiser_id?: KuaishouId;
  parent_package_id?: KuaishouId;
  type?: number;
  count?: number;
  channel_id?: string[];
}

export class AddRequest implements PostRequest, AddRequestInit {
  advertiser_id?: KuaishouId;
  parent_package_id?: KuaishouId;
  type?: number;
  count?: number;
  channel_id?: string[];

  constructor(init: AddRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.parent_package_id = init.parent_package_id;
    this.type = init.type;
    this.count = init.count;
    this.channel_id = init.channel_id;
  }

  path() {
    return "gw/dsp/appcenter/subpkg/add";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      parent_package_id: this.parent_package_id,
      type: this.type,
      count: this.count,
      channel_id: this.channel_id,
    });
  }
}

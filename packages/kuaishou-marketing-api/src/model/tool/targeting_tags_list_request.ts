// Generated from github.com/bububa/kwai-marketing-api/model/tool/targeting_tags_list_request.go
// Do not edit manually.

import type { GetRequest } from "../request";
import type { KuaishouId } from "../types";
import { encodeQuery } from "../types";

export interface TargetingTagsListRequestInit {
  advertiser_id?: KuaishouId;
  type?: string;
}

export class TargetingTagsListRequest implements GetRequest, TargetingTagsListRequestInit {
  advertiser_id?: KuaishouId;
  type?: string;

  constructor(init: TargetingTagsListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.type = init.type;
  }

  path() {
    return "v1/tool/targeting_tags/list";
  }

  encode() {
    return encodeQuery({
      advertiser_id: this.advertiser_id == null ? undefined : String(this.advertiser_id),
      type: this.type == null ? undefined : String(this.type),
    });
  }
}

// Generated from github.com/bububa/kwai-marketing-api/model/tool/creative_word_list_request.go
// Do not edit manually.

import type { GetRequest } from "../request";
import type { KuaishouId } from "../types";
import { encodeQuery } from "../types";

export interface CreativeWordListRequestInit {
  advertiser_id?: KuaishouId;
}

export class CreativeWordListRequest implements GetRequest, CreativeWordListRequestInit {
  advertiser_id?: KuaishouId;

  constructor(init: CreativeWordListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "v1/tool/creative_word/list";
  }

  encode() {
    return encodeQuery({
      advertiser_id: this.advertiser_id == null ? undefined : String(this.advertiser_id),
    });
  }
}

// Generated from github.com/bububa/kwai-marketing-api/model/tool/creative_word_styles_request.go
// Do not edit manually.

import type { GetRequest } from "../request";
import type { KuaishouId } from "../types";
import { encodeQuery } from "../types";

export interface CreativeWordStylesRequestInit {
  advertiser_id?: KuaishouId;
}

export class CreativeWordStylesRequest implements GetRequest, CreativeWordStylesRequestInit {
  advertiser_id?: KuaishouId;

  constructor(init: CreativeWordStylesRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "v1/tool/creative_word/styles";
  }

  encode() {
    return encodeQuery({
      advertiser_id: this.advertiser_id == null ? undefined : String(this.advertiser_id),
    });
  }
}

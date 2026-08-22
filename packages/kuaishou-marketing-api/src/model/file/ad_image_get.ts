// Generated from github.com/bububa/kwai-marketing-api/model/file/ad_image_get.go
// Do not edit manually.

import type { GetRequest } from "../request";
import type { KuaishouId } from "../types";
import { encodeQuery } from "../types";

export interface AdImageGetRequestInit {
  advertiser_id?: KuaishouId;
  image_token?: string;
}

export class AdImageGetRequest implements GetRequest, AdImageGetRequestInit {
  advertiser_id?: KuaishouId;
  image_token?: string;

  constructor(init: AdImageGetRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.image_token = init.image_token;
  }

  path() {
    return "v1/file/ad/image/get";
  }

  encode() {
    return encodeQuery({
      advertiser_id: this.advertiser_id == null ? undefined : String(this.advertiser_id),
      image_token: this.image_token == null ? undefined : String(this.image_token),
    });
  }
}

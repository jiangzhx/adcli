// Generated from github.com/bububa/kwai-marketing-api/model/tool/key_frame_request.go
// Do not edit manually.

import type { GetRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal, encodeQuery } from "../types";

export interface KeyFrameRequestInit {
  advertiser_id?: KuaishouId;
  photo_ids?: string[];
}

export class KeyFrameRequest implements GetRequest, KeyFrameRequestInit {
  advertiser_id?: KuaishouId;
  photo_ids?: string[];

  constructor(init: KeyFrameRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.photo_ids = init.photo_ids;
  }

  path() {
    return "v1/tool/key_frame";
  }

  encode() {
    return encodeQuery({
      advertiser_id: this.advertiser_id == null ? undefined : String(this.advertiser_id),
      photo_ids: this.photo_ids?.length ? new TextDecoder().decode(jsonMarshal(this.photo_ids)) : undefined,
    });
  }
}

// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/upload/pic.go
// Do not edit manually.

import type { UploadRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface PicRequestInit {
  advertiser_id?: KuaishouId;
  file?: UploadField;
  type?: number;
}

export class PicRequest implements UploadRequest, PicRequestInit {
  advertiser_id?: KuaishouId;
  file?: UploadField;
  type?: number;

  constructor(init: PicRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.file = init.file;
    this.type = init.type;
  }

  path() {
    return "gw/dsp/appcenter/upload/pic";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      file: this.file,
      type: this.type,
    });
  }
}

export interface PicResponse {
  url?: string;
}

// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/upload/apk.go
// Do not edit manually.

import type { UploadRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface ApkRequestInit {
  advertiser_id?: KuaishouId;
  file?: UploadField;
}

export class ApkRequest implements UploadRequest, ApkRequestInit {
  advertiser_id?: KuaishouId;
  file?: UploadField;

  constructor(init: ApkRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.file = init.file;
  }

  path() {
    return "gw/dsp/appcenter/upload/apk";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      file: this.file,
    });
  }
}

export interface ApkResponse {
  blob_store_key?: string;
}

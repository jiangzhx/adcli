// Generated from github.com/bububa/kwai-marketing-api/model/file/ad_image_upload_v1.go
// Do not edit manually.

import type { UploadRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AdImageUploadRequestV1Init {
  advertiser_id?: KuaishouId;
  file?: UploadField;
  type?: number;
}

export class AdImageUploadRequestV1 implements UploadRequest, AdImageUploadRequestV1Init {
  advertiser_id?: KuaishouId;
  file?: UploadField;
  type?: number;

  constructor(init: AdImageUploadRequestV1Init = {}) {
    this.advertiser_id = init.advertiser_id;
    this.file = init.file;
    this.type = init.type;
  }

  path() {
    return "v1/file/ad/image/upload";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      file: this.file,
      type: this.type,
    });
  }
}

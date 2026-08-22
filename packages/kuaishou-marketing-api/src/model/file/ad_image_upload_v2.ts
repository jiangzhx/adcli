// Generated from github.com/bububa/kwai-marketing-api/model/file/ad_image_upload_v2.go
// Do not edit manually.

import type { UploadRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AdImageUploadRequestV2Init {
  advertiser_id?: KuaishouId;
  type?: number;
  upload_type?: number;
  file?: UploadField;
  url?: string;
  siganture?: string;
}

export class AdImageUploadRequestV2 implements UploadRequest, AdImageUploadRequestV2Init {
  advertiser_id?: KuaishouId;
  type?: number;
  upload_type?: number;
  file?: UploadField;
  url?: string;
  siganture?: string;

  constructor(init: AdImageUploadRequestV2Init = {}) {
    this.advertiser_id = init.advertiser_id;
    this.type = init.type;
    this.upload_type = init.upload_type;
    this.file = init.file;
    this.url = init.url;
    this.siganture = init.siganture;
  }

  path() {
    return "v2/file/ad/image/upload";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      type: this.type,
      upload_type: this.upload_type,
      file: this.file,
      url: this.url,
      siganture: this.siganture,
    });
  }
}

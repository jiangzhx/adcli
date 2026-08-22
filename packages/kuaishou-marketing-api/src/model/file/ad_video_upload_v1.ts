// Generated from github.com/bububa/kwai-marketing-api/model/file/ad_video_upload_v1.go
// Do not edit manually.

import type { UploadRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AdVideoUploadRequestV1Init {
  advertiser_id?: KuaishouId;
  file?: UploadField;
  type?: number;
  shield_backward_switch?: boolean;
  native_pic_switch?: boolean;
}

export class AdVideoUploadRequestV1 implements UploadRequest, AdVideoUploadRequestV1Init {
  advertiser_id?: KuaishouId;
  file?: UploadField;
  type?: number;
  shield_backward_switch?: boolean;
  native_pic_switch?: boolean;

  constructor(init: AdVideoUploadRequestV1Init = {}) {
    this.advertiser_id = init.advertiser_id;
    this.file = init.file;
    this.type = init.type;
    this.shield_backward_switch = init.shield_backward_switch;
    this.native_pic_switch = init.native_pic_switch;
  }

  path() {
    return "v1/file/ad/video/upload";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      file: this.file,
      type: this.type,
      shield_backward_switch: this.shield_backward_switch,
      native_pic_switch: this.native_pic_switch,
    });
  }
}

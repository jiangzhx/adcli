// Generated from github.com/bububa/kwai-marketing-api/model/file/ad_video_upload_v2.go
// Do not edit manually.

import type { UploadRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AdVideoUploadRequestV2Init {
  advertiser_id?: KuaishouId;
  file?: UploadField;
  type?: number;
  signature?: string;
  photo_name?: string;
  photo_tag?: string[];
  sync?: number;
  shield_backward_switch?: boolean;
  native_pic_switch?: boolean;
}

export class AdVideoUploadRequestV2 implements UploadRequest, AdVideoUploadRequestV2Init {
  advertiser_id?: KuaishouId;
  file?: UploadField;
  type?: number;
  signature?: string;
  photo_name?: string;
  photo_tag?: string[];
  sync?: number;
  shield_backward_switch?: boolean;
  native_pic_switch?: boolean;

  constructor(init: AdVideoUploadRequestV2Init = {}) {
    this.advertiser_id = init.advertiser_id;
    this.file = init.file;
    this.type = init.type;
    this.signature = init.signature;
    this.photo_name = init.photo_name;
    this.photo_tag = init.photo_tag;
    this.sync = init.sync;
    this.shield_backward_switch = init.shield_backward_switch;
    this.native_pic_switch = init.native_pic_switch;
  }

  path() {
    return "v2/file/ad/video/upload";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      file: this.file,
      type: this.type,
      signature: this.signature,
      photo_name: this.photo_name,
      photo_tag: this.photo_tag,
      sync: this.sync,
      shield_backward_switch: this.shield_backward_switch,
      native_pic_switch: this.native_pic_switch,
    });
  }
}

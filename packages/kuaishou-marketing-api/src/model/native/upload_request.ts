// Generated from github.com/bububa/kwai-marketing-api/model/native/upload_request.go
// Do not edit manually.

import type { UploadRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface UploadRequestInit {
  advertiser_id?: KuaishouId;
  photo?: UploadField;
  blob_store_key?: string;
  signature?: string;
  shieldBackwardSwitch?: boolean;
  authorId?: KuaishouId;
  photo_name?: string;
  photo_tag?: string;
  photoCaption?: string;
  nativePlcSwitch?: boolean;
  sync?: number;
}

export class UploadRequest implements UploadRequest, UploadRequestInit {
  advertiser_id?: KuaishouId;
  photo?: UploadField;
  blob_store_key?: string;
  signature?: string;
  shieldBackwardSwitch?: boolean;
  authorId?: KuaishouId;
  photo_name?: string;
  photo_tag?: string;
  photoCaption?: string;
  nativePlcSwitch?: boolean;
  sync?: number;

  constructor(init: UploadRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.photo = init.photo;
    this.blob_store_key = init.blob_store_key;
    this.signature = init.signature;
    this.shieldBackwardSwitch = init.shieldBackwardSwitch;
    this.authorId = init.authorId;
    this.photo_name = init.photo_name;
    this.photo_tag = init.photo_tag;
    this.photoCaption = init.photoCaption;
    this.nativePlcSwitch = init.nativePlcSwitch;
    this.sync = init.sync;
  }

  path() {
    return "gw/dsp/v1/photo/upload";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      photo: this.photo,
      blob_store_key: this.blob_store_key,
      signature: this.signature,
      shieldBackwardSwitch: this.shieldBackwardSwitch,
      authorId: this.authorId,
      photo_name: this.photo_name,
      photo_tag: this.photo_tag,
      photoCaption: this.photoCaption,
      nativePlcSwitch: this.nativePlcSwitch,
      sync: this.sync,
    });
  }
}

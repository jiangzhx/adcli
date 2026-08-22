// Generated from github.com/bububa/kwai-marketing-api/model/file/upload_atlas_photo.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface UploadAtlasPhotoRequestInit {
  advertiser_id?: KuaishouId;
  pic_ids?: string[];
  audio_bs_key?: string;
  shield_backword_switch?: boolean;
  wait_for_transcode?: boolean;
}

export class UploadAtlasPhotoRequest implements PostRequest, UploadAtlasPhotoRequestInit {
  advertiser_id?: KuaishouId;
  pic_ids?: string[];
  audio_bs_key?: string;
  shield_backword_switch?: boolean;
  wait_for_transcode?: boolean;

  constructor(init: UploadAtlasPhotoRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.pic_ids = init.pic_ids;
    this.audio_bs_key = init.audio_bs_key;
    this.shield_backword_switch = init.shield_backword_switch;
    this.wait_for_transcode = init.wait_for_transcode;
  }

  path() {
    return "gw/dsp/upload/atlasPhoto";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      pic_ids: this.pic_ids,
      audio_bs_key: this.audio_bs_key,
      shield_backword_switch: this.shield_backword_switch,
      wait_for_transcode: this.wait_for_transcode,
    });
  }
}

export interface UploadAtlasPhotoResponse {
  photo_id?: string;
}

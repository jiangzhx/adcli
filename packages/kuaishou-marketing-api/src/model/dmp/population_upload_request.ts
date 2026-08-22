// Generated from github.com/bububa/kwai-marketing-api/model/dmp/population_upload_request.go
// Do not edit manually.

import type { UploadRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface PopulationUploadRequestInit {
  advertiser_id?: KuaishouId;
  type?: number;
  orientation_name?: string;
  file?: UploadField;
}

export class PopulationUploadRequest implements UploadRequest, PopulationUploadRequestInit {
  advertiser_id?: KuaishouId;
  type?: number;
  orientation_name?: string;
  file?: UploadField;

  constructor(init: PopulationUploadRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.type = init.type;
    this.orientation_name = init.orientation_name;
    this.file = init.file;
  }

  path() {
    return "v1/dmp/population/upload";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      type: this.type,
      orientation_name: this.orientation_name,
      file: this.file,
    });
  }
}

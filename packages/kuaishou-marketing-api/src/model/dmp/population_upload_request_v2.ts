// Generated from github.com/bububa/kwai-marketing-api/model/dmp/population_upload_request_v2.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface PopulationUploadRequestV2Init {
  advertiser_id?: KuaishouId;
  type?: number;
  orientation_name?: string;
  file_paths?: string[];
}

export class PopulationUploadRequestV2 implements PostRequest, PopulationUploadRequestV2Init {
  advertiser_id?: KuaishouId;
  type?: number;
  orientation_name?: string;
  file_paths?: string[];

  constructor(init: PopulationUploadRequestV2Init = {}) {
    this.advertiser_id = init.advertiser_id;
    this.type = init.type;
    this.orientation_name = init.orientation_name;
    this.file_paths = init.file_paths;
  }

  path() {
    return "gw/dmp/v2/dmp/population/upload";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      type: this.type,
      orientation_name: this.orientation_name,
      file_paths: this.file_paths,
    });
  }
}

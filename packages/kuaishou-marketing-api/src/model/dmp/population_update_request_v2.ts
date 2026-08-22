// Generated from github.com/bububa/kwai-marketing-api/model/dmp/population_update_request_v2.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface PopulationUpdateRequestv2Init {
  advertiser_id?: KuaishouId;
  type?: number;
  orientation_id?: KuaishouId;
  operation_type?: number;
  file_paths?: string[];
}

export class PopulationUpdateRequestv2 implements PostRequest, PopulationUpdateRequestv2Init {
  advertiser_id?: KuaishouId;
  type?: number;
  orientation_id?: KuaishouId;
  operation_type?: number;
  file_paths?: string[];

  constructor(init: PopulationUpdateRequestv2Init = {}) {
    this.advertiser_id = init.advertiser_id;
    this.type = init.type;
    this.orientation_id = init.orientation_id;
    this.operation_type = init.operation_type;
    this.file_paths = init.file_paths;
  }

  path() {
    return "gw/dmp/v2/dmp/population/update";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      type: this.type,
      orientation_id: this.orientation_id,
      operation_type: this.operation_type,
      file_paths: this.file_paths,
    });
  }
}

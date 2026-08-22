// Generated from github.com/bububa/kwai-marketing-api/model/dmp/population_update_request.go
// Do not edit manually.

import type { UploadRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface PopulationUpdateRequestInit {
  advertiser_id?: KuaishouId;
  type?: number;
  orientation_id?: KuaishouId;
  operation_type?: number;
  file?: UploadField;
}

export class PopulationUpdateRequest implements UploadRequest, PopulationUpdateRequestInit {
  advertiser_id?: KuaishouId;
  type?: number;
  orientation_id?: KuaishouId;
  operation_type?: number;
  file?: UploadField;

  constructor(init: PopulationUpdateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.type = init.type;
    this.orientation_id = init.orientation_id;
    this.operation_type = init.operation_type;
    this.file = init.file;
  }

  path() {
    return "v1/dmp/population/update";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      type: this.type,
      orientation_id: this.orientation_id,
      operation_type: this.operation_type,
      file: this.file,
    });
  }
}

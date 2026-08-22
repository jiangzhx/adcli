// Generated from github.com/bububa/kwai-marketing-api/model/dmp/population_list_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface PopulationListRequestInit {
  advertiser_id?: KuaishouId;
  status?: number;
  page?: number;
  page_size?: number;
  orientation_ids?: KuaishouId[];
}

export class PopulationListRequest implements PostRequest, PopulationListRequestInit {
  advertiser_id?: KuaishouId;
  status?: number;
  page?: number;
  page_size?: number;
  orientation_ids?: KuaishouId[];

  constructor(init: PopulationListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.status = init.status;
    this.page = init.page;
    this.page_size = init.page_size;
    this.orientation_ids = init.orientation_ids;
  }

  path() {
    return "v2/dmp/population/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      status: this.status,
      page: this.page,
      page_size: this.page_size,
      orientation_ids: this.orientation_ids,
    });
  }
}

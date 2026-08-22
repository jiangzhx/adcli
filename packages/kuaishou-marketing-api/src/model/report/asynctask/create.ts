// Generated from github.com/bububa/kwai-marketing-api/model/report/asynctask/create.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { TaskParams } from "./task";

export interface CreateRequestInit {
  advertiser_id?: KuaishouId;
  task_name?: string;
  task_params?: TaskParams;
}

export class CreateRequest implements PostRequest, CreateRequestInit {
  advertiser_id?: KuaishouId;
  task_name?: string;
  task_params?: TaskParams;

  constructor(init: CreateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.task_name = init.task_name;
    this.task_params = init.task_params;
  }

  path() {
    return "v1/async_task/create";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      task_name: this.task_name,
      task_params: this.task_params,
    });
  }
}

export interface CreateResponse {
  advertiser_id?: KuaishouId;
  task_id?: KuaishouId;
}

// Generated from github.com/bububa/kwai-marketing-api/model/report/asynctask/list.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { Task } from "./task";

export interface ListRequestInit {
  advertiser_id?: KuaishouId;
  task_ids?: KuaishouId[];
  page?: number;
  page_size?: number;
}

export class ListRequest implements PostRequest, ListRequestInit {
  advertiser_id?: KuaishouId;
  task_ids?: KuaishouId[];
  page?: number;
  page_size?: number;

  constructor(init: ListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.task_ids = init.task_ids;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "v1/async_task/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      task_ids: this.task_ids,
      page: this.page,
      page_size: this.page_size,
    });
  }
}

export interface ListResponse {
  total_count?: number;
  details?: Task[];
}

// Generated from github.com/bububa/kwai-marketing-api/model/tool/preput/predication_task_list.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { AdPredicationTaskDetail } from "./predication_task_detail";

export interface PredicationTaskListRequestInit {
  advertiser_id?: KuaishouId;
  current_page?: number;
  page_size?: number;
  task_ids?: KuaishouId[];
  task_create_time_duration?: string[];
}

export class PredicationTaskListRequest implements PostRequest, PredicationTaskListRequestInit {
  advertiser_id?: KuaishouId;
  current_page?: number;
  page_size?: number;
  task_ids?: KuaishouId[];
  task_create_time_duration?: string[];

  constructor(init: PredicationTaskListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.current_page = init.current_page;
    this.page_size = init.page_size;
    this.task_ids = init.task_ids;
    this.task_create_time_duration = init.task_create_time_duration;
  }

  path() {
    return "/gw/dsp/v1/pre_put/predication_task/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      current_page: this.current_page,
      page_size: this.page_size,
      task_ids: this.task_ids,
      task_create_time_duration: this.task_create_time_duration,
    });
  }
}

export interface PredicationTaskListResponse {
  tasks?: AdPredicationTaskDetail[];
  current_page?: number;
  page_size?: number;
  total_count?: number;
}

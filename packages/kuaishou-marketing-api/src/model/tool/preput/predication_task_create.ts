// Generated from github.com/bububa/kwai-marketing-api/model/tool/preput/predication_task_create.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { AdPredicationTask } from "./predication_task";

export interface PredicationTaskCreateRequestInit {
  advertiser_id?: KuaishouId;
  tasks?: AdPredicationTask[];
}

export class PredicationTaskCreateRequest implements PostRequest, PredicationTaskCreateRequestInit {
  advertiser_id?: KuaishouId;
  tasks?: AdPredicationTask[];

  constructor(init: PredicationTaskCreateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.tasks = init.tasks;
  }

  path() {
    return "/gw/dsp/v1/pre_put/predication_task/create";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      tasks: this.tasks,
    });
  }
}

export interface RealTaskResult {
  successful?: number;
  failed?: number;
  task_failed_reason_list?: TaskFailedReason[];
}

export interface TaskFailedReason {
  message?: string;
  refer_task_id?: KuaishouId;
  photo_predication_status?: number;
  ocpx_action_type?: number;
}

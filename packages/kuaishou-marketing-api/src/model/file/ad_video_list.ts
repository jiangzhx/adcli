// Generated from github.com/bububa/kwai-marketing-api/model/file/ad_video_list.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";
import type { Video } from "./video";

export interface AdVideoListRequestInit {
  advertiser_id?: KuaishouId;
  photo_ids?: string[];
  new_status?: number;
  start_date?: string;
  end_date?: string;
  update_start_date?: string;
  update_end_date?: string;
  page?: number;
  page_size?: number;
  outer_loop_native?: number;
  photo_user_id?: KuaishouId;
}

export class AdVideoListRequest implements PostRequest, AdVideoListRequestInit {
  advertiser_id?: KuaishouId;
  photo_ids?: string[];
  new_status?: number;
  start_date?: string;
  end_date?: string;
  update_start_date?: string;
  update_end_date?: string;
  page?: number;
  page_size?: number;
  outer_loop_native?: number;
  photo_user_id?: KuaishouId;

  constructor(init: AdVideoListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.photo_ids = init.photo_ids;
    this.new_status = init.new_status;
    this.start_date = init.start_date;
    this.end_date = init.end_date;
    this.update_start_date = init.update_start_date;
    this.update_end_date = init.update_end_date;
    this.page = init.page;
    this.page_size = init.page_size;
    this.outer_loop_native = init.outer_loop_native;
    this.photo_user_id = init.photo_user_id;
  }

  path() {
    return "v1/file/ad/video/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      photo_ids: this.photo_ids,
      new_status: this.new_status,
      start_date: this.start_date,
      end_date: this.end_date,
      update_start_date: this.update_start_date,
      update_end_date: this.update_end_date,
      page: this.page,
      page_size: this.page_size,
      outer_loop_native: this.outer_loop_native,
      photo_user_id: this.photo_user_id,
    });
  }
}

export interface AdVideoListResponse {
  total_count?: number;
  details?: Video[];
}

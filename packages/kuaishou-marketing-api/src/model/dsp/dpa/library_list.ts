// Generated from github.com/bububa/kwai-marketing-api/model/dsp/dpa/library_list.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId, PageInfo } from "../../types";
import { jsonMarshal } from "../../types";

export interface LibraryListRequestInit {
  page_info?: PageInfo;
  name?: string;
  biz_id?: number[];
  advertiser_id?: KuaishouId;
  library_id?: KuaishouId;
  status?: number;
  query_type?: number;
}

export class LibraryListRequest implements PostRequest, LibraryListRequestInit {
  page_info?: PageInfo;
  name?: string;
  biz_id?: number[];
  advertiser_id?: KuaishouId;
  library_id?: KuaishouId;
  status?: number;
  query_type?: number;

  constructor(init: LibraryListRequestInit = {}) {
    this.page_info = init.page_info;
    this.name = init.name;
    this.biz_id = init.biz_id;
    this.advertiser_id = init.advertiser_id;
    this.library_id = init.library_id;
    this.status = init.status;
    this.query_type = init.query_type;
  }

  path() {
    return "gw/dsp/dpa/library/list";
  }

  encode() {
    return jsonMarshal({
      page_info: this.page_info,
      name: this.name,
      biz_id: this.biz_id,
      advertiser_id: this.advertiser_id,
      library_id: this.library_id,
      status: this.status,
      query_type: this.query_type,
    });
  }
}

export interface LibraryListResponse {
  page_info?: PageInfo;
  data?: AdDpaLibraryViewSneak[];
}

export interface AdDpaLibraryViewSneak {
  name?: string;
  library_desc?: string;
  library_id?: KuaishouId;
  status?: number;
  create_time?: number;
  biz_id?: number;
}

// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/subpkg/list.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { SubPackage } from "./sub_package";

export interface ListRequestInit {
  advertiser_id?: KuaishouId;
  app_id?: KuaishouId;
  list_type?: number;
  key_word?: string;
  status?: number;
  version?: string[];
  page?: number;
  page_size?: number;
}

export class ListRequest implements PostRequest, ListRequestInit {
  advertiser_id?: KuaishouId;
  app_id?: KuaishouId;
  list_type?: number;
  key_word?: string;
  status?: number;
  version?: string[];
  page?: number;
  page_size?: number;

  constructor(init: ListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.app_id = init.app_id;
    this.list_type = init.list_type;
    this.key_word = init.key_word;
    this.status = init.status;
    this.version = init.version;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "gw/dsp/appcenter/subPackage/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      app_id: this.app_id,
      list_type: this.list_type,
      key_word: this.key_word,
      status: this.status,
      version: this.version,
      page: this.page,
      page_size: this.page_size,
    });
  }
}

export interface ListResponse {
  current_page?: number;
  page_size?: number;
  total_count?: number;
  list?: SubPackage[];
}

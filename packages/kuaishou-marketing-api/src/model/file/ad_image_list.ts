// Generated from github.com/bububa/kwai-marketing-api/model/file/ad_image_list.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";
import type { Image } from "./image";

export interface AdImageListRequestInit {
  advertiser_id?: KuaishouId;
  start_date?: string;
  end_date?: string;
  pic_types?: number[];
  image_token?: string;
  image_tokens?: string[];
  page?: number;
  page_size?: number;
}

export class AdImageListRequest implements PostRequest, AdImageListRequestInit {
  advertiser_id?: KuaishouId;
  start_date?: string;
  end_date?: string;
  pic_types?: number[];
  image_token?: string;
  image_tokens?: string[];
  page?: number;
  page_size?: number;

  constructor(init: AdImageListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.start_date = init.start_date;
    this.end_date = init.end_date;
    this.pic_types = init.pic_types;
    this.image_token = init.image_token;
    this.image_tokens = init.image_tokens;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "v1/file/ad/image/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      start_date: this.start_date,
      end_date: this.end_date,
      pic_types: this.pic_types,
      image_token: this.image_token,
      image_tokens: this.image_tokens,
      page: this.page,
      page_size: this.page_size,
    });
  }
}

export interface AdImageListResponse {
  total_count?: number;
  details?: Image[];
}

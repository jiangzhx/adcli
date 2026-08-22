// Generated from github.com/bububa/kwai-marketing-api/model/dsp/target/option_distance_list.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import { jsonMarshal } from "../../types";

export interface OptionDistanceListRequestInit {
  province_name?: string;
  city_name?: string;
  district_name?: string;
  location_name?: string;
  page?: number;
  page_size?: number;
}

export class OptionDistanceListRequest implements PostRequest, OptionDistanceListRequestInit {
  province_name?: string;
  city_name?: string;
  district_name?: string;
  location_name?: string;
  page?: number;
  page_size?: number;

  constructor(init: OptionDistanceListRequestInit = {}) {
    this.province_name = init.province_name;
    this.city_name = init.city_name;
    this.district_name = init.district_name;
    this.location_name = init.location_name;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "gw/dsp/target/option/distance_list";
  }

  encode() {
    return jsonMarshal({
      province_name: this.province_name,
      city_name: this.city_name,
      district_name: this.district_name,
      location_name: this.location_name,
      page: this.page,
      page_size: this.page_size,
    });
  }
}

export interface OptionDistanceListResponse {
  list?: Distance[];
  current_page?: number;
  page_size?: number;
  next_page?: number;
}

export interface Distance {
  address?: string;
  lat?: string;
  lng?: string;
  location_name?: string;
  poi_id?: string;
  radius?: number;
}

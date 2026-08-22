// Generated from github.com/bububa/kwai-marketing-api/model/tool/audienc_predict_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AudiencePredictRequestInit {
  advertiser_id?: KuaishouId;
  region?: number[];
  ages_range?: number[];
  gender?: number;
  platform_os?: number;
  android_osv?: number;
  ios_osv?: number;
  network?: number;
  device_brand?: number[];
  device_price?: number[];
  business_interest_type?: number;
  business_interest?: number[];
  fans_star?: number[];
  interest_video?: number[];
  app_interest?: number[];
  app_ids?: KuaishouId[];
  population?: number[];
  exclude_population?: number[];
}

export class AudiencePredictRequest implements PostRequest, AudiencePredictRequestInit {
  advertiser_id?: KuaishouId;
  region?: number[];
  ages_range?: number[];
  gender?: number;
  platform_os?: number;
  android_osv?: number;
  ios_osv?: number;
  network?: number;
  device_brand?: number[];
  device_price?: number[];
  business_interest_type?: number;
  business_interest?: number[];
  fans_star?: number[];
  interest_video?: number[];
  app_interest?: number[];
  app_ids?: KuaishouId[];
  population?: number[];
  exclude_population?: number[];

  constructor(init: AudiencePredictRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.region = init.region;
    this.ages_range = init.ages_range;
    this.gender = init.gender;
    this.platform_os = init.platform_os;
    this.android_osv = init.android_osv;
    this.ios_osv = init.ios_osv;
    this.network = init.network;
    this.device_brand = init.device_brand;
    this.device_price = init.device_price;
    this.business_interest_type = init.business_interest_type;
    this.business_interest = init.business_interest;
    this.fans_star = init.fans_star;
    this.interest_video = init.interest_video;
    this.app_interest = init.app_interest;
    this.app_ids = init.app_ids;
    this.population = init.population;
    this.exclude_population = init.exclude_population;
  }

  path() {
    return "v1/tool/audience/prediction";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      region: this.region,
      ages_range: this.ages_range,
      gender: this.gender,
      platform_os: this.platform_os,
      android_osv: this.android_osv,
      ios_osv: this.ios_osv,
      network: this.network,
      device_brand: this.device_brand,
      device_price: this.device_price,
      business_interest_type: this.business_interest_type,
      business_interest: this.business_interest,
      fans_star: this.fans_star,
      interest_video: this.interest_video,
      app_interest: this.app_interest,
      app_ids: this.app_ids,
      population: this.population,
      exclude_population: this.exclude_population,
    });
  }
}

// Generated from github.com/bububa/kwai-marketing-api/model/target/target.go
// Do not edit manually.

import type { KuaishouId } from "../types";
import type { Age } from "./age";
import type { BehaviorInterest } from "./behavior_interest";
import type { IntelliExtend } from "./intelli_extend";

export interface Target {
  region?: number[];
  district_ids?: KuaishouId[];
  user_type?: number;
  age?: Age;
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
  app_interest_ids?: KuaishouId[];
  app_ids?: KuaishouId[];
  app_name?: string[];
  filter_converted_level?: number;
  population?: number[];
  paid_audience?: number[];
  exclude_population?: number[];
  intelli_extend?: IntelliExtend;
  behavior_interest?: BehaviorInterest;
  media?: number[];
  exclude_media?: number[];
  media_source_type?: number;
}

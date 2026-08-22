// Generated from github.com/bububa/kwai-marketing-api/model/target_v2/target.go
// Do not edit manually.

import type { KuaishouId } from "../types";
import type { BehaviorInterest } from "./behavior_interest";

export interface Target {
  region?: number[];
  district_ids?: KuaishouId[];
  behavior_interest?: BehaviorInterest;
  user_type?: number;
  ages_range?: number[];
  age?: Age;
  gender?: number;
  platform_os?: number;
  android_osv?: number;
  ios_osv?: number;
  network?: number;
  filter_converted_level?: number;
  device_brand?: number[];
  device_price?: number[];
  app_interest_ids?: KuaishouId[];
  app_ids?: KuaishouId[];
  population?: number[];
  paid_audience?: number[];
  exclude_population?: number[];
  intelli_extend_option?: number;
  behavior_type?: number;
  celebrity?: Celebrity;
  media_source_type?: number;
  media?: number[];
  exclude_media?: number[];
  seed_population?: number[];
  ip_type?: number;
}

export interface Age {
  min?: number;
  max?: number;
}

export interface Celebrity {
  behaviors?: number[];
  fans_stars?: FansStar;
}

export interface FansStar {
  id?: string;
  type?: number;
  name?: string;
  category?: number[];
}

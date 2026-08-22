// Generated from github.com/bububa/kwai-marketing-api/model/dsp/unit/target.go
// Do not edit manually.

import type { KuaishouId } from "../../types";

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
  device_brand_ids?: number[];
  device_price?: number[];
  app_interest_ids?: KuaishouId[];
  app_ids?: KuaishouId[];
  filter_converted_level?: number;
  population?: number[];
  exclude_population?: number[];
  paid_audience?: number[];
  seed_population?: number[];
  inteli_extend_option?: number;
  behavior_type?: number;
  behavior_interest?: BehaviorInterest;
  disable_installed_app_switch?: number;
  filter_time_range?: number;
  celebrity?: Celebrity;
  media?: number[];
  exclude_media?: number[];
  media_source_type?: number;
  ip_type?: number;
  auto_population?: number;
}

export interface Celebrity {
  behaviors?: number[];
  fans_stars?: FansStar[];
}

export interface FansStar {
  id?: string;
  type?: number;
  name?: string;
  category?: number[];
}

export interface Age {
  min?: number;
  max?: number;
}

export interface BehaviorInterest {
  behavior?: Behavior;
  interest?: Interest;
}

export interface Behavior {
  keyword?: Keyword[];
  label?: string[];
  time_type?: number;
  strength_type?: number;
  scene_type?: number;
}

export interface Interest {
  label?: string[];
  strength_type?: number;
}

export interface Keyword {
  id?: KuaishouId;
  name?: string;
}

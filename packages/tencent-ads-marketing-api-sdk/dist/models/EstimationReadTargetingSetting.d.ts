import type { AgeStruct, BehaviorOrInterest, GeoLocations, LimitWechatAdBehavior } from "../models";
export interface EstimationReadTargetingSetting {
    age?: AgeStruct[];
    gender?: string[];
    education?: string[];
    marital_status?: string[];
    geo_location?: GeoLocations;
    user_os?: string[];
    device_price?: string[];
    network_type?: string[];
    network_operator?: string[];
    app_install_status?: string[];
    mini_game_qq_status?: string[];
    consumption_status?: string[];
    game_consumption_level?: string[];
    paid_user?: string[];
    wechat_ad_behavior?: LimitWechatAdBehavior;
    custom_audience?: number[];
    excluded_custom_audience?: number[];
    deprecated_custom_audience?: number[];
    deprecated_excluded_custom_audience?: number[];
    behavior_or_interest?: BehaviorOrInterest;
    wechat_official_account_category?: number[];
    mobile_union_category?: number[];
    financial_situation?: string[];
}

import type { AppAndroidMyappSpec, AppAndroidUnionSpec, EcInfo, LocalAdsSpecRead, MiniGameWechatSpec, ProductTypeDianpingShop, PromotedObjectAppAndroidSpec, PromotedObjectAppIosSpec, QqBrowserMiniProgram } from "../model/index";
export interface PromotedObjectSpecRead {
    jd_item?: EcInfo;
    jd_shop?: EcInfo;
    app_ios_spec?: PromotedObjectAppIosSpec;
    app_android_spec?: PromotedObjectAppAndroidSpec;
    app_android_union_spec?: AppAndroidUnionSpec;
    app_android_myapp_spec?: AppAndroidMyappSpec;
    dianping_shop?: ProductTypeDianpingShop;
    mini_game_wechat_spec?: MiniGameWechatSpec;
    qq_browser_mini_program?: QqBrowserMiniProgram;
    local_ads_spec?: LocalAdsSpecRead;
}

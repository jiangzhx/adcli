import type { DeepLinkAppAndroidSpec, DeepLinkAppIosSpec } from "../model/index";
export interface LinkSpec {
    title?: string;
    url?: string;
    deep_link_android_spec?: DeepLinkAppAndroidSpec;
    deep_link_ios_spec?: DeepLinkAppIosSpec;
}

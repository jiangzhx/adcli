import type { DeepLinkAppAndroidSpec, DeepLinkAppIosSpec, SimplifyMiniProgramSpec } from "../models";
export interface ElementButtonLinkSpec {
    title?: string;
    url?: string;
    deep_link_android_spec?: DeepLinkAppAndroidSpec;
    deep_link_ios_spec?: DeepLinkAppIosSpec;
    mini_program_spec?: SimplifyMiniProgramSpec;
}

import type { AppAndroidSpec, AppIosSpec } from "../model/index";
export interface AppDownloadSpec {
    title?: string;
    app_ios_spec?: AppIosSpec;
    app_android_spec?: AppAndroidSpec;
}

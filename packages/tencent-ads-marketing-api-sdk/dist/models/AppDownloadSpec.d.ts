import type { AppAndroidSpec, AppIosSpec } from "../models";
export interface AppDownloadSpec {
    title?: string;
    app_ios_spec?: AppIosSpec;
    app_android_spec?: AppAndroidSpec;
}

import type { CanvasAppAndroidSpecType, CanvasAppIosSpecType } from "../v3/index";
export interface FloatAppDownloadSpec {
    title?: string;
    font_color?: string;
    bg_color?: string;
    app_ios_spec?: CanvasAppIosSpecType;
    app_android_spec?: CanvasAppAndroidSpecType;
}

// Generated from tencentad/marketing-api-go-sdk pkg/model/model_canvas_app_download_spec_type.go
// Do not edit manually.

import type { CanvasAppAndroidSpecType, CanvasAppIosSpecType } from "../model/index";

export interface CanvasAppDownloadSpecType {
  title?: string;
  font_color?: string;
  bg_color?: string;
  padding_top?: number;
  padding_bottom?: number;
  app_ios_spec?: CanvasAppIosSpecType;
  app_android_spec?: CanvasAppAndroidSpecType;
}


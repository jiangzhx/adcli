// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { NativeAnchorCreateV30AnchorInfoNetServiceAnchorNetServiceType, NativeAnchorCreateV30RequestAnchorInfoNetServiceAnchorAppImagesInner, NativeAnchorCreateV30RequestAnchorInfoNetServiceAnchorHeadImageListInner, NativeAnchorCreateV30RequestAnchorInfoNetServiceAnchorIconImagesInner } from "../models";

export interface NativeAnchorCreateV30RequestAnchorInfoNetServiceAnchor {
  anchor_image_mode?: number;
  android_anchor_title?: string;
  android_download_url?: string;
  app_description?: string;
  app_images?: NativeAnchorCreateV30RequestAnchorInfoNetServiceAnchorAppImagesInner[];
  app_open_url?: string;
  app_tags?: string[];
  guide_text?: string;
  harmony_anchor_title?: string;
  harmony_download_url?: string;
  head_image_list?: NativeAnchorCreateV30RequestAnchorInfoNetServiceAnchorHeadImageListInner[];
  icon_images?: NativeAnchorCreateV30RequestAnchorInfoNetServiceAnchorIconImagesInner[];
  instance_id?: number;
  ios_anchor_title?: string;
  ios_download_url?: string;
  net_service_type?: NativeAnchorCreateV30AnchorInfoNetServiceAnchorNetServiceType;
  novel_chapter?: string;
  path_param?: string;
  platform_type?: number;
  quick_app_id?: number;
  wechat_external_url?: string;
  wechat_package_id?: number;
}


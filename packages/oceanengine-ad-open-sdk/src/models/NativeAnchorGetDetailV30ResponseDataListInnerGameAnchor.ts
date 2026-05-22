// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { NativeAnchorGetDetailV30DataListGameAnchorGameType, NativeAnchorGetDetailV30ResponseDataListInnerGameAnchorAppImagesInner, NativeAnchorGetDetailV30ResponseDataListInnerGameAnchorGamePackageListInner, NativeAnchorGetDetailV30ResponseDataListInnerGameAnchorHeadImageListInner, NativeAnchorGetDetailV30ResponseDataListInnerGameAnchorIconImagesInner } from "../models";

export interface NativeAnchorGetDetailV30ResponseDataListInnerGameAnchor {
  anchor_image_mode?: number;
  android_anchor_title?: string;
  android_download_url?: string;
  app_images?: NativeAnchorGetDetailV30ResponseDataListInnerGameAnchorAppImagesInner[];
  app_open_url?: string;
  app_tags?: string[];
  game_bonus?: boolean;
  game_charatoristic?: string;
  game_description?: string;
  game_package_list?: NativeAnchorGetDetailV30ResponseDataListInnerGameAnchorGamePackageListInner[];
  game_type?: NativeAnchorGetDetailV30DataListGameAnchorGameType;
  guide_text?: string;
  harmony_download_url?: string;
  head_image_list?: NativeAnchorGetDetailV30ResponseDataListInnerGameAnchorHeadImageListInner[];
  icon_images?: NativeAnchorGetDetailV30ResponseDataListInnerGameAnchorIconImagesInner[];
  instance_id?: number | string;
  ios_anchor_title?: string;
  ios_download_url?: string;
  micro_app_name?: string;
  micro_app_user_name?: string;
  other_description?: string;
  path_param?: string;
  platform_type?: number;
}


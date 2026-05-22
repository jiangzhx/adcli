// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { ComponentMetadataFieldValidType, ComponentMetadataValueValidEnumOption, ComponentMetadataValueValidImageFormatOption, ComponentMetadataValueValidJoint, ComponentMetadataValueValidVideoFormatOption } from "../models";

export interface ComponentMetadataValueValid {
  required?: boolean;
  type?: ComponentMetadataFieldValidType;
  file_format?: string;
  file_size_kb_limit?: number;
  height?: number;
  width?: number;
  max_length?: number;
  min_length?: number;
  pattern?: string;
  min_emoji_occurs?: number;
  max_emoji_occurs?: number;
  ratio_height?: number;
  ratio_width?: number;
  min_duration?: number;
  max_duration?: number;
  min_height?: number;
  min_width?: number;
  joint?: ComponentMetadataValueValidJoint;
  default_bool_value?: boolean;
  enum_options?: ComponentMetadataValueValidEnumOption[];
  min_occurs?: number;
  max_occurs?: number;
  image_format_options?: ComponentMetadataValueValidImageFormatOption[];
  min_duration_millisecond?: number;
  max_duration_millisecond?: number;
  video_format_options?: ComponentMetadataValueValidVideoFormatOption[];
}


// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_creative_component_value_valid.go
// Do not edit manually.

import type { ComponentMetadataFieldValidType, ComponentMetadataValueValidEnumOption, ComponentMetadataValueValidImageFormatOption, ComponentMetadataValueValidVideoFormatOption } from "../v3/index";

export interface CreativeComponentValueValid {
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
  is_support_line_break?: boolean;
  min_occurs?: number;
  max_occurs?: number;
  max_total_content?: number;
  enum_options?: ComponentMetadataValueValidEnumOption[];
  min_duration_millisecond?: number;
  max_duration_millisecond?: number;
  image_format_options?: ComponentMetadataValueValidImageFormatOption[];
  video_format_options?: ComponentMetadataValueValidVideoFormatOption[];
}


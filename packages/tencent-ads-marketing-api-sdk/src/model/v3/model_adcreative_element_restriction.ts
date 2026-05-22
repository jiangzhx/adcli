// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_adcreative_element_restriction.go
// Do not edit manually.

import type { ImageRestriction, LinkNameTextRestriction, NumberRestriction, TextRestriction, UrlRestriction, VideoRestriction } from "../v3/index";

export interface AdcreativeElementRestriction {
  text_restriction?: TextRestriction;
  image_restriction?: ImageRestriction;
  url_restriction?: UrlRestriction;
  video_restriction?: VideoRestriction;
  number_restriction?: NumberRestriction;
  link_name_text_restrictions?: LinkNameTextRestriction[];
}


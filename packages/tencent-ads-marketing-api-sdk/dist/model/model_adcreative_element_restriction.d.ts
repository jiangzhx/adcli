import type { ImageRestriction, NumberRestriction, TextRestriction, UrlRestriction, VideoRestriction } from "../model/index";
export interface AdcreativeElementRestriction {
    text_restriction?: TextRestriction;
    image_restriction?: ImageRestriction;
    url_restriction?: UrlRestriction;
    video_restriction?: VideoRestriction;
    number_restriction?: NumberRestriction;
}

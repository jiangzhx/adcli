import type { ImageRestriction, LinkNameTextRestriction, NumberRestriction, TextRestriction, UrlRestriction, VideoRestriction } from "../models";
export interface AdcreativeElementRestriction {
    text_restriction?: TextRestriction;
    image_restriction?: ImageRestriction;
    url_restriction?: UrlRestriction;
    video_restriction?: VideoRestriction;
    number_restriction?: NumberRestriction;
    link_name_text_restrictions?: LinkNameTextRestriction[];
}

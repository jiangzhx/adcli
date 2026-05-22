// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wxgame_playable_page_struct.go
// Do not edit manually.

import type { WxgamePlayablePageEndTimeType } from "../v3/index";

export interface WxgamePlayablePageStruct {
  wxgame_playable_page_switch?: boolean;
  wxgame_playable_page_path?: string;
  wxgame_playable_page_end_cover_img?: string;
  wxgame_playable_page_end_desc?: string;
  wxgame_playable_page_trigger_types?: string[];
  wxgame_playable_page_trigger_text?: string;
  wxgame_playable_page_card_link_image?: string;
  wxgame_playable_page_card_link_description?: string;
  wxgame_playable_page_end_time_type?: WxgamePlayablePageEndTimeType;
}


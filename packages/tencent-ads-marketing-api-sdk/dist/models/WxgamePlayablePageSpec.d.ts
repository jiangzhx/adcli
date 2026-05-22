import type { WxgamePlayablePageOrientation } from "../models";
export interface WxgamePlayablePageSpec {
    wxgame_playable_page_switch?: boolean;
    wxgame_playable_page_path?: string;
    wxgame_playable_page_end_cover_img?: string;
    wxgame_playable_page_end_desc?: string;
    wxgame_playable_page_orientation?: WxgamePlayablePageOrientation;
}

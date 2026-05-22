import type { PlayablePageStatus } from "../v3/index";
export interface PlayablePageInfo {
    playable_page_path?: string;
    playable_page_name?: string;
    nick_name?: string;
    status?: PlayablePageStatus;
}

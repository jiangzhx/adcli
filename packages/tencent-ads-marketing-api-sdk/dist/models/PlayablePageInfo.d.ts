import type { PlayablePageStatus } from "../models";
export interface PlayablePageInfo {
    playable_page_path?: string;
    playable_page_name?: string;
    nick_name?: string;
    status?: PlayablePageStatus;
}

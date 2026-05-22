import type { Medias } from "../v3/index";
export interface FinderObjectStruct {
    finder_username?: string;
    description?: string;
    medias?: Medias;
    flag?: number;
    wechat_channels_account_id?: string;
    wechat_channels_account_name?: string;
    bullet_comment_switch_open?: boolean;
    bullet_comment_supported?: boolean;
}

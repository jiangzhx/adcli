import type { AppAndroidSpec, AppIosSpec, CardSpec, ElementButtonLinkSpec, FengyeSpec, FollowSpec, MiniGameProgramSpec, MiniProgramSpec, ServiceSpec, TelSpec, VideoChannelSpec, WecomSpec } from "../models";
export interface ElementButtonRead {
    title?: string;
    url?: string;
    link_spec?: ElementButtonLinkSpec;
    app_ios_spec?: AppIosSpec;
    app_android_spec?: AppAndroidSpec;
    mini_program_spec?: MiniProgramSpec;
    mini_game_program_spec?: MiniGameProgramSpec;
    fengye_spec?: FengyeSpec;
    card_spec?: CardSpec;
    follow_spec?: FollowSpec;
    service_spec?: ServiceSpec;
    wecom_spec?: WecomSpec;
    use_icon?: number;
    tel_spec?: TelSpec;
    video_channel_spec?: VideoChannelSpec;
}

import type { SimpleCanvasSubType, SimpleCanvasWebviewType } from "../v3/index";
export interface SimpleCanvasWechatSpec {
    simple_canvas_webview_type?: SimpleCanvasWebviewType;
    simple_canvas_webview_page_id?: string;
    simple_canvas_sub_type?: SimpleCanvasSubType;
    simple_canvas_share_title?: string;
    simple_canvas_share_desc?: string;
    simple_canvas_webview_url?: string;
    wechat_channels_live_reserve_id?: string;
    mpa_simple_canvas_webview_wildcard_url?: string;
}

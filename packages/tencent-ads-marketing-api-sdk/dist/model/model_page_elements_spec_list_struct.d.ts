import type { CanvasAppDownloadSpecType, CanvasPageElementType, EnterpriseWxSpec, GhSpec, ImageSpec, ImageTextSpec, SliderSpec, TextSpec, TopImageSpec, TopSliderSpec, TopVideoSpec, VideoSpec, WeappSpec } from "../model/index";
export interface PageElementsSpecListStruct {
    element_type?: CanvasPageElementType;
    top_image_spec?: TopImageSpec;
    top_slider_spec?: TopSliderSpec;
    top_video_spec?: TopVideoSpec;
    image_spec?: ImageSpec;
    slider_spec?: SliderSpec;
    video_spec?: VideoSpec;
    text_spec?: TextSpec;
    app_download_spec?: CanvasAppDownloadSpecType;
    weapp_spec?: WeappSpec;
    gh_spec?: GhSpec;
    enterprise_wx_spec?: EnterpriseWxSpec;
    image_text_spec?: ImageTextSpec;
}

import type { ElementAnimateFloat, ElementButtonRead, ElementFloat, ElementForm, ElementGoods, ElementImage, ElementShelf, ElementSwipe, ElementText, ElementVideo, ElementWebview, PageElementsType } from "../model/index";
export interface PageElementsStruct {
    element_shelf?: ElementShelf;
    element_float?: ElementFloat;
    element_goods?: ElementGoods;
    element_swipe?: ElementSwipe;
    element_webview?: ElementWebview;
    element_animate_float?: ElementAnimateFloat;
    image_spec?: ElementImage;
    video_spec?: ElementVideo;
    text_spec?: ElementText;
    button_spec?: ElementButtonRead;
    form_spec?: ElementForm;
    element_type?: PageElementsType;
}

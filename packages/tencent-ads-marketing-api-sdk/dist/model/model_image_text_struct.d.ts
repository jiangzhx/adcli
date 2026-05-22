import type { ImageStruct, LandingPageStructure } from "../model/index";
export interface ImageTextStruct {
    image?: ImageStruct;
    text?: string;
    jump_info?: LandingPageStructure[];
}

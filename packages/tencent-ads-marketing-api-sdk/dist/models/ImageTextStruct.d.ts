import type { ImageStruct, LandingPageStructure } from "../models";
export interface ImageTextStruct {
    image?: ImageStruct;
    text?: string;
    jump_info?: LandingPageStructure[];
}

export declare const ElementType: {
    readonly TEXT: "ELEMENT_TYPE_TEXT";
    readonly IMAGE: "ELEMENT_TYPE_IMAGE";
    readonly VIDEO: "ELEMENT_TYPE_VIDEO";
    readonly URL: "ELEMENT_TYPE_URL";
    readonly ENUM: "ELEMENT_TYPE_ENUM";
    readonly CANVAS: "ELEMENT_TYPE_CANVAS";
    readonly STRUCT: "ELEMENT_TYPE_STRUCT";
    readonly REFERENCE: "ELEMENT_TYPE_REFERENCE";
    readonly BOOLEAN: "ELEMENT_TYPE_BOOLEAN";
    readonly PHONE: "ELEMENT_TYPE_PHONE";
    readonly FORM: "ELEMENT_TYPE_FORM";
    readonly CONSULT: "ELEMENT_TYPE_CONSULT";
    readonly NUMBER: "ELEMENT_TYPE_NUMBER";
    readonly LANDING_PAGE_STRUCT: "ELEMENT_TYPE_LANDING_PAGE_STRUCT";
};
export type ElementType = typeof ElementType[keyof typeof ElementType];

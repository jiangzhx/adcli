export declare const ProductAttributeType: {
    readonly RADIO: "radio";
    readonly STRING: "string";
    readonly ENUM: "enum";
};
export type ProductAttributeType = typeof ProductAttributeType[keyof typeof ProductAttributeType];

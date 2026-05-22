export declare const BindingType: {
    readonly OVERWRITE: "LABEL_BINDING_TYPE_OVERWRITE";
    readonly ADD: "LABEL_BINDING_TYPE_ADD";
    readonly DELETE: "LABEL_BINDING_TYPE_DELETE";
};
export type BindingType = typeof BindingType[keyof typeof BindingType];

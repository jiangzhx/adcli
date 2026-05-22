export declare const ImageOperationType: {
    readonly CROP_CUSTOMIZED: "OPERATION_TYPE_CROP_CUSTOMIZED";
    readonly CROP_SMART: "OPERATION_TYPE_CROP_SMART";
    readonly RESIZE: "OPERATION_TYPE_RESIZE";
    readonly CROP_CUSTOMIZED_AND_RESIZE: "OPERATION_TYPE_CROP_CUSTOMIZED_AND_RESIZE";
};
export type ImageOperationType = typeof ImageOperationType[keyof typeof ImageOperationType];

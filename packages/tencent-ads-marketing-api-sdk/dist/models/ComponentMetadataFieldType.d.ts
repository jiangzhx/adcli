export declare const ComponentMetadataFieldType: {
    readonly UNKNOWN: "UNKNOWN";
    readonly STRING: "STRING";
    readonly INT: "INT";
    readonly BOOL: "BOOL";
    readonly STRING_ARRAY: "STRING_ARRAY";
    readonly INT_ARRAY: "INT_ARRAY";
    readonly STRUCTURE: "STRUCTURE";
    readonly STRUCTURE_ARRAY: "STRUCTURE_ARRAY";
};
export type ComponentMetadataFieldType = typeof ComponentMetadataFieldType[keyof typeof ComponentMetadataFieldType];

export declare const FieldType: {
    readonly STRING: "FIELD_TYPE_STRING";
    readonly ENUM: "FIELD_TYPE_ENUM";
    readonly INTEGER: "FIELD_TYPE_INTEGER";
    readonly STRUCT: "FIELD_TYPE_STRUCT";
    readonly INTEGER_ARRAY: "FIELD_TYPE_INTEGER_ARRAY";
    readonly ENUM_ARRAY: "FIELD_TYPE_ENUM_ARRAY";
    readonly STRING_ARRAY: "FIELD_TYPE_STRING_ARRAY";
    readonly STRUCT_ARRAY: "FIELD_TYPE_STRUCT_ARRAY";
    readonly BOOLEAN: "FIELD_TYPE_BOOLEAN";
};
export type FieldType = typeof FieldType[keyof typeof FieldType];

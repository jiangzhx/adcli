export declare const Operator: {
    readonly LT: "LT";
    readonly GT: "GT";
    readonly EQ: "EQ";
    readonly NE: "NE";
    readonly CONTAIN: "CONTAIN";
    readonly NOT_CONTAIN: "NOT_CONTAIN";
};
export type Operator = typeof Operator[keyof typeof Operator];

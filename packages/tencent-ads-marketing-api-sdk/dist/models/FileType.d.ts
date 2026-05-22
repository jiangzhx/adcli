export declare const FileType: {
    readonly PDF: "PDF";
    readonly DOC: "DOC";
};
export type FileType = typeof FileType[keyof typeof FileType];

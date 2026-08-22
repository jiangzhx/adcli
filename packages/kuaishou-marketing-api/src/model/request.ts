// Ported from github.com/bububa/kwai-marketing-api/model/request.go

export interface PostRequest {
  path(): string;
  encode(): Uint8Array;
}

export interface GetRequest {
  path(): string;
  encode(): string;
}

export type UploadReader = Blob | ArrayBuffer | Uint8Array;

export interface UploadField {
  reader?: UploadReader;
  key: string;
  value: string;
}

export interface UploadRequest {
  path(): string;
  encode(): UploadField[];
}

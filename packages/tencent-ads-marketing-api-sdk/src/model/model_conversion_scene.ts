// Generated from tencentad/marketing-api-go-sdk pkg/model/model_conversion_scene.go
// Do not edit manually.

export const ConversionScene = {
  ANDROID: "CONVERSION_SCENE_ANDROID",
  IOS: "CONVERSION_SCENE_IOS",
  WEB: "CONVERSION_SCENE_WEB",
  WECHAT_MINI_PROGRAM: "CONVERSION_SCENE_WECHAT_MINI_PROGRAM",
  WECHAT_MINI_GAME: "CONVERSION_SCENE_WECHAT_MINI_GAME",
  QQ_MINI_GAME: "CONVERSION_SCENE_QQ_MINI_GAME",
  QUICK_APP: "CONVERSION_SCENE_QUICK_APP",
  WE_COM: "CONVERSION_SCENE_WE_COM",
} as const;

export type ConversionScene = typeof ConversionScene[keyof typeof ConversionScene];


---
title: 本地视频上传接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2701&menuId=3436
doc_id: kuaishou_2701
source_id: kuaishou_2701
---
# 本地视频上传接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2701 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-06-24T08:25:08.462Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/photo/upload |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| photo_tag | String[] |  |  | photo_tag |  |
| photo_name | String |  |  | photo_name |  |
| blob_store_key | String |  |  | blob_store_key |  |
| signature | String |  |  | md5 |  |
| photo | File |  |  | 视频file |  |
| shieldBackwardSwitch | Boolean |  | true | 上传视频后是否自动同步至快手个人主页 | false 表示屏蔽，视频不可 profile 页可见， true 表示不屏蔽。 |
| authorId | Long | 是 | 12345 | 原生上传至达人的快手号 |  |
| photoCaption | String |  |  | 视频描述 | 长度不能超过30个字符 |
| nativePlcSwitch | Boolean |  |  | 挂载plc组件（建议设置为true，有机会获得更多流量曝光） | 设置为true，平台将把根据推广目标生成的PLC组件挂载至该次本地上传的视频上。 |
| sync | Integer |  | 1 | 用同步/异步方式上传视频 | 1代表同步 0代表异步，默认同步上传。 使用异步上传存在两个风险： 1、异步上传可能出现视频转码失败case。 2、如果创建物料时，视频解码失败或者解码中，生成物料会失败。 建议同步上传。 |

## 请求样例

### 请求样例 (jsonc)

```
{ "authorId":"2191482285", "advertiser_id":"900015430", "photo":"/Users/mengting/Downloads/竖版视频/竖版1.mp4", "shieldBackwardSwitch":true, "photoCaption":"测试一下" }
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 请求状态 | 0 代表成功 非0代表失败 |
| message | String |  |  | 请求结果提示 | “OK”代表成功 |
| data | AdDspPhotoUploadResSnack |  |  | 请求结果 |  |
| - photo_id | Long |  |  | photoId | 视频ID（加密） |

## 返回样例

### 返回样例 (jsonc)

```
{ "code":0, "message":"OK", "data":{ "photo_id":123 } }
```

## 原始内容

```
本地视频上传接口 /rest/openapi/gw/dsp/v1/photo/upload { "authorId":"2191482285", "advertiser_id":"900015430", "photo":"/Users/mengting/Downloads/竖版视频/竖版1.mp4", "shieldBackwardSwitch":true, "photoCaption":"测试一下" } { "code":0, "message":"OK", "data":{ "photo_id":123 } } advertiser_id Long 广告主id photo_tag String[] photo_tag photo_name String photo_name blob_store_key String blob_store_key signature String md5 photo File 视频file shieldBackwardSwitch Boolean 上传视频后是否自动同步至快手个人主页 authorId Long 原生上传至达人的快手号 photoCaption String 视频描述 nativePlcSwitch Boolean 挂载plc组件（建议设置为true，有机会获得更多流量曝光） sync Integer 用同步/异步方式上传视频 code Integer 请求状态 message String 请求结果提示 data AdDspPhotoUploadResSnack 请求结果 photo_id Long photoId
```

---
title: 上传视频接口 v2
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2634&menuId=3358
doc_id: kuaishou_2634
source_id: kuaishou_2634
---
# 上传视频接口 v2

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2634 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-10-31T03:37:16.896Z |

## 概述

📢 注意：此接口新增 blob_store_key参数。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v2/file/ad/video/upload |
| httpMethod | POST |
| httpContentType | FORM |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| blob_store_key | String |  |  | 视频存储地址令牌 | 填写该字段时需要先使用文件流式上传或分片上传。注意：file文件方式和blob_store_key方式二选一填写 |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| file | File |  |  | 视频文件 | 只支持 mp4 格式，详细要求见附录。 注意：file文件方式和blob_store_key方式二选一填写 |
| signature | String | 是 |  | 视频 md5 值 | 用于服务端校验。注意：保证与所上传视频文件或者blob_store_key对应，请勿重复上传 |
| photo_name | String |  |  | 视频名称 | 不超过 150 字符，若不传默认为视频id |
| photo_tag | String |  |  | 视频标签 | 单个标签不超过 10 字符，支持一个标签 |
| sync | Integer |  |  | 用同步/异步方式上传视频 | 0:(默认)以异步方式上传，不需要同步等待，上传较快。1:(选填)同步方式上传，上传较慢 |
| shield_backward_switch | Boolean |  |  | 上传视频后是否自动同步至快手个人主页 | false 表示后端屏蔽，视频不可 profile 页可见， true 表示不屏蔽。 |
| type | Integer |  |  | 上传视频类型 | 1：信息流竖版视频（默认） 2：信息流横版视频 3：后贴片竖版视频（已下线） 4：后贴片横版视频（已下线） 5: 开屏视频-720 1280 6: 开屏视频-720 1440 7: 开屏视频-720 1520 8: 开屏视频-720 1560 9: 开屏视频-720 1280~1080 1920 （加白使用） |
| native_plc_switch | Boolean |  |  | 原生投放时视频挂载plc组件（建议设置为true，有机会获得更多流量曝光） | false 表示不挂载plc true表示挂载，非白名单用户必须挂载plc，设置为true，平台将把根据推广目标生成的PLC组件挂载至该次本地上传的视频上。 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/v2/file/ad/video/upload' \
--header 'Access-Token: 1e41aab611f75e1c2472f8dd5c540b21' \
--form 'advertiser_id="11311124"' \
--form 'shield_backward_switch="false"' \
--form 'type="1"' \
--form 'file=@"/Users/xxx.mp4"' \
--form 'signature="36ffe2e21cb5b12bde752021331e2614"' \
--form 'photo_name="测试"' \
--form 'photo_tag="tag1"' \
--form 'sync="0"' \
--form 'shield_backward_switch="false"'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | PhotoV2Data29 |  |  | 返回数据 |  |
| - photo_id | String |  |  | photo_id加密 |  |
| - photoId | String |  |  | 废弃字段 |  |
| - signature | String |  |  | md5 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "signature": "36ffe2e21cb5b12bde752021331e2614",
        "photoId": "5238249419979025844",
        "photo_id": "5238249419979025844"
    },
    "request_id": "9570f23378d9423eb16fbac70e987005"
}
```

## 原始内容

```
上传视频接口 v2 /rest/openapi/v2/file/ad/video/upload curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/v2/file/ad/video/upload' \ --header 'Access-Token: 1e41aab611f75e1c2472f8dd5c540b21' \ --form 'advertiser_id="11311124"' \ --form 'shield_backward_switch="false"' \ --form 'type="1"' \ --form 'file=@"/Users/xxx.mp4"' \ --form 'signature="36ffe2e21cb5b12bde752021331e2614"' \ --form 'photo_name="测试"' \ --form 'photo_tag="tag1"' \ --form 'sync="0"' \ --form 'shield_backward_switch="false"' { "code": 0, "message": "OK", "data": { "signature": "36ffe2e21cb5b12bde752021331e2614", "photoId": "5238249419979025844", "photo_id": "5238249419979025844" }, "request_id": "9570f23378d9423eb16fbac70e987005" } blob_store_key String 视频存储地址令牌 advertiser_id Long 广告主 ID file File 视频文件 signature String 视频 md5 值 photo_name String 视频名称，默认是视频 id photo_tag String 视频标签 sync Integer 用同步/异步方式上传视频 shield_backward_switch Boolean 上传视频后是否自动同步至快手个人主页 type Integer 上传视频类型 native_plc_switch Boolean 原生投放时视频挂载plc组件（建议设置为true，有机会获得更多流量曝光） code Integer 返回码 message String 返回信息 data PhotoV2Data29 返回数据 photo_id String photo_id加密 photoId String 废弃字段 signature String md5
```

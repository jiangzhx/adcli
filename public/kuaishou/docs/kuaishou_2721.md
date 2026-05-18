---
title: 上传试玩素材
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2721&menuId=3452
doc_id: kuaishou_2721
source_id: kuaishou_2721
---
# 上传试玩素材

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2721 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-23T02:43:40.347Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/playable/upload |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 1 | 广告主id |  |
| file | File | 是 |  | 试玩上传zip文件 |  |
| platform | Integer | 是 | 2 | 试玩素材投放的平台，默认为联盟，代码 2。 | 1：快手主站；2：快手广告联盟。默认为快手广告联盟。 旧主站试玩包，只返回预览url，不存储；旧联盟试玩包，返回预览url 并存储；通用试玩包，platform=1，只返回预览url，不存储；通用试玩包，platform=2，返回预览url，并存储，推荐使用「直存试玩」接口。 |
| play_name | String | 是 | 试玩名称 | 试玩名称 |  |
| play_time | Integer |  | 10 | 试玩时长 |  |
| file_type | Integer |  | 0 | 试玩包文件类型：0=Zip，1=APK |  |

## 请求样例

### 请求样例 (jsonc)

```
curl -X POST \
-H 'Access-Token: 69d99a7c1fdf3f4b271b' \
-H 'Content-Type: multipart/form-data' \
-F "advertiser_id=200152" \
-F "file=@/Users/jackchou/Downloads/ad-material/1280.zip" \
-L https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/playable/upload
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | 状态码 |  |
| message | String |  | “” | 错误信息 |  |
| data | AdGatewayPlayableView |  |  | 试玩广告结构体 |  |
| - playable_url | String |  | “” | 试玩广告的index.html的url | 上传失败，值为空字符串 |
| - playable_orientation | Integer |  | -1 | 试玩广告屏幕方向 | 0:横竖均;1:竖屏;2:横屏 |
| - upload_fail_tips | String[] |  | [] | 试玩广告校验失败的原因 | 上传成功时，值为空列表。1、格式为 zip，大小不超过 3M；2、已接入 playable JS-SDK，并且调用方式为 window.openAppStore()；3、主 html 文件需命名为 index，且位于一级目录中；4、试玩广告播放方向字段应存储于 config.json 文件中，位于一级目录中，取值为 0,1,2；5、文件名称仅支持大小写字母、数字、减号和下划线；6、素材中不允许使用 mraid.js 格式；7、素材不允许通过外部网络加载动态素材；8、素材中不允许包含 JS 重定向；9、素材不允许发出 HTTP 请求" |
| - playable_id | Long |  | 1 | 上传成功时返回的试玩素材 ID。 |  |
| - upload_source | Integer |  | 0 | 从试玩 zip 包解析出来的试玩包类型 | 1：快手主站；2：快手广告联盟；3：快手主站或快手广告联盟均可 |

## 返回样例

### 返回样例 (jsonc)

```
{
   "code":0,
   "message":"OK",
   "data":{
       "playable_id":5785679425,
       "playable_url":"https://static.yximgs.com/udata/pkg/KS-AD-MERCHANT/testplayable/tomato/index.html",
       "playable_orientation":0,
       "upload_source":2,
       "upload_fail_tips":[
       ]
     }
}
```

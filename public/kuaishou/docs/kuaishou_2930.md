---
title: 上传图片 v2 接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2930&menuId=3680
doc_id: kuaishou_2930
source_id: kuaishou_2930
---
# 上传图片 v2 接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2930 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-03-11T03:11:16.628Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v2/file/ad/image/upload |
| httpMethod | POST |
| httpContentType | FORM |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 accessToken 的时候返回 |
| type | Integer | 是 |  | 上传图片类型 | 0-1.0创意封面图片；1-app icon；2-信息流场景视频封面图片；5-竖版图片；6-横版图片；7-小图，（组图与小图对于格式要求一致，只不过组图传三个）；8-开屏图片_720*1280；9-开屏图片_750*1334；10-开屏图片_1080*1920；11-开屏图片_1080*2160；12-开屏图片_1080*2280；13-开屏图片_1080*2340；15-APP详情图片；16-图集图片；17-剧集卡片封面；100-高级创意-图片卡片；101-高级创意-多利益卡-图文；102-高级创意-多利益卡-多标签；103-高级创意-电商促销样式；104-高级创意-快捷评论；107-高级创意-轻互动样式；109-高级创意-轻互动样式；125-高级创意-价格差样式；200-高级创意-推广位 |
| upload_type | Integer | 是 |  | 上传方式 | 1: 通过文件上传；2: 通过图片 url 上传 |
| file | File |  |  | 图片文件 | upload_type 为 1 时必填 |
| url | String |  |  | 图片 url | upload_type 为 2 时必填 |
| signature | String |  |  | 图片 md5 值 |  |
| name | String |  |  | 图片名称 | 不填会默认填充UUID |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/v2/file/ad/image/upload' \
--header 'Access-Token: 1e41aab611f75e1c2472f8dd5c540b21' \
--form 'advertiser_id="11311124"' \
--form 'file=@"/Users/xxx.jpg"' \
--form 'type="6"' \
--form 'name="图片名称"' \
--form 'upload_type="1"' \
--form 'signature="8dd39015efc6e85b070974ef0abc8f64"'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | ImageUploadV2Data |  |  | JSON 返回值 |  |
| - url | String |  |  | 图片预览地址 |  |
| - width | Long |  |  | 图片宽度 |  |
| - height | Long |  |  | 图片高度 |  |
| - size | Long |  |  | 图片大小 |  |
| - format | String |  |  | 图片格式 |  |
| - signature | String |  |  | 图片 md5 值 |  |
| - image_token | String |  |  | 图片 token | 创建创意时使用 |
| - pic_id | String |  |  | 图片库图片ID |  |
| - pic_type | String |  |  | 图片类型 | 0-默认，5-竖版，6-横版，12-开屏，16-图集 |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "url": "https://static.yximgs.com/udata/pkg/market484ccbeaf5a6467495cbc0248d8e83d7.jpg",
        "width": 1920,
        "height": 1080,
        "size": 12988,
        "format": "jpg",
        "signature": "8dd39015efc6e85b070974ef0abc8f64",
        "name": "图片名称",
        "pic_type": 6,
        "image_token": "market484ccbeaf5a6467495cbc0248d8e83d7.jpg",
        "pic_id": "5228116223311661787"
    },
    "request_id": "8f2fe78c9cc44147a233a1748add887f"
}
```

---
title: 上传图片 v1 接口【逐步废弃，请使用V2接口】
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2929&menuId=3679
doc_id: kuaishou_2929
source_id: kuaishou_2929
---
# 上传图片 v1 接口【逐步废弃，请使用V2接口】

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2929 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:34:28.341Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/image/upload |
| httpMethod | POST |
| httpContentType | FORM |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 accessToken 的时候返回 |
| file | File | 是 |  | 图片文件 | 详细要求见附录 |
| type | Integer | 是 |  | 上传图片类型 | 0-1.0创意封面图片；1-app icon；2-信息流场景视频封面图片；5-竖版图片；6-横版图片；7-小图，（组图与小图对于格式要求一致，只不过组图传三个）；8-开屏图片_720*1280；9-开屏图片_750*1334；10-开屏图片_1080*1920；11-开屏图片_1080*2160；12-开屏图片_1080*2280；13-开屏图片_1080*2340；14-开屏图片_全部；15-APP详情图片；100-高级创意-图片卡片；101-高级创意-多利益卡-图文；102-高级创意-多利益卡-多标签；103-高级创意-电商促销样式；104-高级创意-快捷评论；107-高级创意-轻互动样式；109-高级创意-轻互动样式；200-高级创意-推广位 |
| name | String |  |  | 图片名称 | 不填会默认填充UUID |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/image/upload' \
--header 'Access-Token: 1e41aab611f75e1c2472f8dd5c540b21' \
--form 'advertiser_id="11311124"' \
--form 'file=@"/Users/xx/xx.png"' \
--form 'type="1"' \
--form 'name="test"'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | ImageUploadData |  |  | JSON 返回值 |  |
| - url | String |  |  | 图片预览地址 |  |
| - width | Long |  |  | 图片宽度 |  |
| - height | Long |  |  | 图片高度 |  |
| - size | Long |  |  | 图片大小 |  |
| - format | String |  |  | 图片格式 |  |
| - image_token | String |  |  | 图片 token | 创建创意时使用 |
| - pic_id | String |  |  | 图片库图片ID |  |
| - name | String |  |  | 图片名称 |  |
| - signature | String |  |  | 图片md5 |  |
| - pic_type | String |  |  | 图片类型 | 0-默认，5-竖版，6-横版，12-开屏 |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "url": "https://static.yximgs.com/udata/pkg/market7e2373da0f954321b6ee5a22f02b1f25.png",
        "width": 450,
        "height": 450,
        "size": 29841,
        "format": "png",
        "signature": "df8ef4f51c1e45dfcff99a659e431e9b",
        "name": "test",
        "pic_type": 0,
        "image_token": "market7e2373da0f954321b6ee5a22f02b1f25.png",
        "pic_id": "5194339224591157157"
    },
    "request_id": "9b343f32cc6e477eaf9c9b29e6102ca1"
}
```

---
title: 获取可选的封面贴纸样式
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2943&menuId=3695
doc_id: kuaishou_2943
source_id: kuaishou_2943
---
# 获取可选的封面贴纸样式

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2943 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:05:01.506Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/tool/creative_word/styles |
| httpMethod | GET |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |

## 请求样例

### 请求样例 (shell)

```
curl -X GET \
  -H 'Access-Token: 6acd879e43a32b58b5' \
  -H 'Content-Type: application/json' \
  -d '{
    "advertiser_id": 20000152
  }' -L https://ad.e.kuaishou.com/rest/openapi/v1/tool/creative_word/styles
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | ToolCreativeWordStylesData |  |  | JSON 返回值 |  |
| - sticker_style_id | Integer |  |  | 贴纸样式 ID |  |
| - pic_id | String |  |  | 图片库图片ID |  |
| - sticker_styles | StickerStyles[] |  |  | 贴纸样式列表 | 具体见下方表格 |
| - overlay_type | String |  |  | 贴纸样式类型 | 返回格式{stickerstyle_id}{pos}，sticker_style_id 表示贴纸样式 ID，pos 表示位置，1: top, 2: mid, 3: bottom |
| - overlay_preview_url | String |  |  | 贴纸样式预览链接 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": [
        {
            "sticker_style_id": 1,
            "sticker_styles": [
                {
                    "overlay_type": "1_1",
                    "overlay_preview_url": "http://static.yximgs.com/udata/pkg/cover_compose_18108caa985046d297a574ea61ef7674.jpg"
                }
            ]
        }
    ]
}
```

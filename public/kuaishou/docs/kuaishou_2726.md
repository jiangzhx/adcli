---
title: 查询 DPA 模板信息
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2726&menuId=3459
doc_id: kuaishou_2726
source_id: kuaishou_2726
---
# 查询 DPA 模板信息

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2726 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:47:51.585Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/dpa/template/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| page | PageInfoSnake |  |  | 分页信息 |  |
| - current_page | Long | 是 | 1 | 当前页面值 |  |
| - page_size | Long |  | 10 | 页面大小 |  |
| template_types | Integer[] | 是 |  | DPA 类型列表 | 1:竖版图片、2:横版图片 3:横版视频、4:竖版视频 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/dpa/template/list' \
--header 'Access-Token: 69d99a7c1fdf3f4b271b' \
--header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id": 20000152,
    "template_types": [4]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PaginateTemplateResponse977 |  |  | DPA模板响应信息 |  |
| - templates | AdDpaTemplateSnake[] |  |  | DPA模板信息 |  |
| - id | Long |  | 1 | DPA 创意模板 id |  |
| - name | String |  | dpa | DPA 创意模板名 |  |
| - cover_url | String |  | https://test.com/cover | 模板图片 url | 当模板类型为「图片」类型时，该字段表示图片地址； 当模板类型为「视频」类型是，该字段为视频对应的封面地址。 |
| - video_url | String |  | https://test.com/video | 模板预览视频 url | 当模板类型为「视频」类型时，该字段表示视频地址； 当模板类型为「图片」类型是，该字段为空。 |
| - video_duration | Long |  | 5000 | 视频播放时长 |  |
| - editable_area_cover_url | String |  | https://test.com/cover_editable | 模板可编辑区域图片 url | 模板可编辑区域图片 url。 当模板类型为「图片」类型时，该字段表示图片地址； 当模板类型为「视频」类型是，该字段为空。 |
| - height | Integer |  | 540 | 模板生成衍生物料的高 |  |
| - width | Integer |  | 1080 | 模板生成衍生物料的宽 |  |
| - template_type | Integer |  | 1 | 模板类型 |  |
| - page | PageInfoSnake |  |  | 分页信息 |  |
| - current_page | Long |  | 1 | 当前页面值 |  |
| - page_size | Long |  | 10 | 页面大小 |  |
| - total_count | Long |  | 2 | 总共数目 |  |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 状态信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "templates": [
            {
                "editable_area_cover_url": "https://tx2.a.yximgs.com/bs2/ad-creativeCenter/image_v_v.jpeg",
                "video_duration": 5000,
                "cover_url": "https://tx-ad.a.yximgs.com/bs2/ad-creativeCenter/1b787d3f06d34a00b01ba0cf32271a00.jpg",
                "video_url": "https://tx-ad.a.yximgs.com/bs2/ad-creativeCenter/16346e049e8946c1b1f3cfa4d3619738.mp4",
                "name": "电商-竖视频1",
                "width": 1080,
                "template_type": 4,
                "id": 2137982230,
                "height": 1920
            }
        ],
        "page": {
            "total_count": 1,
            "current_page": 1,
            "page_size": 10
        }
    },
    "message": "OK",
    "request_id": "EMiAgICA0qeyChIKAiDjya656TAoi87jxgE="
}
```

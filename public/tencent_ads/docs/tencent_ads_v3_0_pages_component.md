---
title: 创建创意组件及使用
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/component
doc_id: tencent_ads_v3_0_pages_component
source_id: tencent_ads_v3_0_pages_component
---
# 创建创意组件及使用

本节将为您介绍组件的创建、更新及使用。

## 1.查询创意组件元数据信息

通过[component/get_metadata](https://developers.e.qq.com/v3.0/docs/api/components_metadata/get)接口查询具体 sub_type 类型的组件元数据，组件元数据用于描述[component/add](https://developers.e.qq.com/v3.0/docs/api/component/add) 接口中 component_value 字段的填写内容及具体字段的内容约束。 以下示例表示，video 组件中 value 结构里应包含 video_id 及 cover_id 两个字段，valid 结构为对当前字段的约束。例如 video_id 为 type=VIDEO 类型 id，必填，视频应小于 512000kb，宽度为 1280，高度为 720，时长应为 5-300s

```
{
    "list": [
        {
            "name": "video",
            "component_sub_type": "VIDEO_16X9",
            "value_field": [
                {
                    "name": "video_id",
                    "type": "STRING",
                    "is_array": false,
                    "is_simple_type": true,
                    "valid": {
                        "required": true,
                        "type": "VIDEO",
                        "file_format": "*.mp4|*.mov|*.avi",
                        "file_size_kb_limit": 512000,
                        "width": 1280,
                        "height": 720,
                        "min_duration": 5,
                        "max_duration": 300,
                        "ratio_height": 9,
                        "ratio_width": 16
                    }
                },
                {
                    "name": "cover_id",
                    "type": "STRING",
                    "is_array": false,
                    "is_simple_type": true,
                    "valid": {
                        "required": false,
                        "type": "IMAGE",
                        "file_format": "*.jpg|*.jpeg|*.png",
                        "file_size_kb_limit": 140,
                        "width": 1280,
                        "height": 720,
                        "ratio_height": 9,
                        "ratio_width": 16
                    }
                }
            ]
        }
    ]
}
```

组图元数据 例如（1X1）3 图中，当"type": "STRUCTURE"时，表示当前字段为结构体字段，"structure"字段描述 list 数组中每一个结构中的所有字段

```
{
    "name": "image_list",
    "component_type": "IMAGE_LIST",
    "component_sub_type": "IMAGE_LIST_1X1_3",
    "value_field": [
        {
            "name": "list",
            "type": "STRUCTURE",
            "structure": [
                {
                    "name": "image_id",
                    "type": "STRING",
                    "is_array": false,
                    "is_simple_type": true,
                    "valid": {
                        "required": true,
                        "type": "IMAGE",
                        "file_format": "*.jpg|*.jpeg|*.png|*.bmp",
                        "file_size_kb_limit": 400,
                        "height": 800,
                        "width": 800,
                        "ratio_width": 1,
                        "ratio_height": 1
                    }
                }
            ],
            "is_array": true,
            "is_simple_type": false,
            "valid": {
                "required": true,
                "max_length": 3,
                "min_length": 3
            }
        }
    ]
}
```

## 2.创建组件

通过[component/add](https://developers.e.qq.com/v3.0/docs/api/component/add)接口创建组件，例如 添加 9X16 单图

```
{
    "account_id":<ACCOUNT_ID>,
    "component_value": {
        "image": {
            "value": {
                "image_id": "<IMAGE_ID>"
            }
        }
    },
    "component_sub_type": "IMAGE_9X16"
}
```

添加（1X1）3 图

```
{
    "account_id":<ACCOUNT_ID>,
    "component_sub_type": "IMAGE_LIST_1X1_3",
    "component_value": {
        "image_list": {
            "value": {
                "list": [
                    {
                        "image_id": "<IMAGE_ID>"
                    },
                    {
                        "image_id": "<IMAGE_ID>"
                    },
                    {
                        "image_id": "<IMAGE_ID>"
                    }
                ]
            }
        }
    }
}
```

## 3.创建广告时使用已有创意组件

您在[dynamic_creatives/add](https://developers.e.qq.com/v3.0/docs/api/dynamic_creatives/add)接口 creative_components 中的对应组件中填写 component_id 字段进行使用。例如 creative_components 中 video 组件结构中将已使用的组件 id 填写至 component_id 字段中。

```
{
    "creative_components": {
        "image_list": [
            {
                "component_id": <IMAGELIST_COMPONENT_ID>            }
        ],
        "video":[
            {
                "component_id": <VIDEO_COMPONENT_ID>
            }
        ]
        "description": [
            {
                "component_id": <DESCRIPTION_COMPONENT_ID>,
                "value": {
					"content": "测试文案"
				   }
            }
        ]
    }
}
```

注意：组件结构中 component_id 字段和 value 结构同时填写时，优先使用 value 结构数据，例如例子中的 description 组件

## 4.更新广告时使用已有创意组件

您在[dynamic_creatives/update](https://developers.e.qq.com/v3.0/docs/api/dynamic_creatives/udpate)接口 creative_components 中的对应组件中填写 component_id 字段进行使用。例如 creative_components 中 video 组件结构中将已使用的组件 id 填写至 component_id 字段中。

```
{
    "creative_components": {
        "image_list": [
            {
                "component_id": <IMAGELIST_COMPONENT_ID>            }
        ],
        "video":[
            {
                "component_id": <VIDEO_COMPONENT_ID>
            }
        ]
        "description": [
            {
                "component_id": <DESCRIPTION_COMPONENT_ID>,
                "value": {
					"content": "测试文案"
				   }
            }
        ]
    }
}
```

注意：组件结构中 component_id 字段和 value 结构同时填写时，优先使用 value 结构数据，例如例子中的 description 组件

## 5.删除组件

组件创建完毕后，您可以通过[component/delete](https://developers.e.qq.com/v3.0/docs/api/component/delete)接口删除组件，当该组件没有引用时可删除，即无广告创意使用该组件时可删除。

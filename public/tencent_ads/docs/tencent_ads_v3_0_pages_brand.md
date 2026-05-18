---
title: 品牌形象指南
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/brand
doc_id: tencent_ads_v3_0_pages_brand
source_id: tencent_ads_v3_0_pages_brand
---
# 品牌形象指南

品牌形象由 3 部分组成，昵称(brand_name)、头像(brand_image_id)和跳转信息(jump_info)组成。 品牌形象目前有 5 种，其中包含独立跳转信息的有 4 种（视频号、品牌简介页、搜一搜超级品专和公众号）。

填写路径为 creative_components.brand，示例如下

```
{
    "creative_components": {
        "brand": [ // 具体内容 
            {
                "value": {
					"brand_name": "昵称",
					"brand_image_id": "头像",
                    "jump_info": {
                        // 跳转信息
                    }
                }
            }
        ]
    }
}
```

## 不同类型简介及填写示例

### 1. 视频号

当用户点击品牌形象后，将跳转到对应的视频号主页。

#### 投放端界面

#### api 参数

不用填写 brand_name 和 brand_image_id，我们会根据 jump_info 的 username 扩展出来。

```
{
    "value": {
        "jump_info": {
            "page_type": "PAGE_TYPE_WECHAT_CHANNELS_PROFILE",
            "page_spec": {
                "wechat_channels_profile_spec": {
                    "username": "替换为视频号账号"
                }
            }
        }
    }
}
```

### 2. 品牌简介页

创建品牌简介页可以通过[接口](https://developers.e.qq.com/v3.0/docs/api/profiles/add)

#### 投放端界面

#### api 参数

不用填写 brand_name 和 brand_image_id，我们会根据 jump_info 的 page_id 扩展出来。page_id 对应 profile_id，可以从[创建](https://developers.e.qq.com/v3.0/docs/api/profiles/add)时获取，也可以通过[查询接口](https://developers.e.qq.com/v3.0/docs/api/profiles/get)拿到。

```
{
    "value": {
        "jump_info": {
            "page_type": "PAGE_TYPE_H5_PROFILE",
            "page_spec": {
                "h5_profile_spec": {
                    "page_id": 11111 // 替换为实际 profile_id
                }
            }
        }
    }
}
```

### 3. 搜一搜超级品专

点击后将跳转至搜一搜。

#### 投放端界面

#### api 参数

```
{
    "value": {
        "brand_name": "替换为实际昵称", 
        "brand_image_id": "替换为实际头像图片 id",
        "jump_info": {
            "page_type": "PAGE_TYPE_SEARCH_BRAND_AREA",
            "page_spec": {
                "search_area_brand_spec": {
                    "search_brand_area_keyword": "替换为实际关键词"
                }
            }
        }
    }
}
```

### 4. 公众号

点击后将跳转至公众号。

#### 投放端界面

#### api 参数

不用填写 brand_name 和 brand_image_id，我们会根据 jump_info 的 app_id 扩展出来。

```
{
    "value": {
        "jump_info": {
            "page_type": "PAGE_TYPE_WECHAT_OFFICIAL_ACCOUNT_DETAIL",
            "page_spec": {
                "wechat_official_account_detail_spec": {
                    "app_id": "替换为实际公众号 id"
                }
            }
        }
    }
}
```

### 5. 品牌形象

此特指无独立跳转的品牌形象，也叫自定义。

#### 投放端界面

#### api 参数

```
{
    "value": {
        "brand_name": "替换为实际昵称", 
        "brand_image_id": "替换为实际头像图片 id"
    }
}
```

## 昵称(brand_name)填写要求

昵称的长度要求为 2 到 12 字，汉字和中文标点算 1 个字数，英文和其他字符 2 个算 1 个字数，不足 1 个算 1 个。 昵称支持如下特殊字符:

```
-
&
+
.
:
：
! // 感叹号(英文)
！ // 感叹号(中文)
  // 空格
( // 左括号(英文)
（// 左括号(中文)
) // 右括号(英文)
）// 右括号(中文)
' // 单引号(英文)
‘ // 左单引号(中文)
’ // 右单引号(中文)
· // 点(英文)
```

如果有其他特殊字符需求，请联系对接运营。

## 不同版位对品牌形象的要求

朋友圈版位仅支持包含跳转的品牌形象。 视频号版位仅支持视频号品牌形象。(注：如果填写了 wechat_channels_spec 组件，则品牌形象必须为视频号品牌形象，且视频号账号须一致) 其他版位暂无特殊要求。 如果您填写的品牌形象不满足对应版位的要求，创意将无法在对应版位播出。

---
title: 标签投放
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/label
doc_id: tencent_ads_v3_0_pages_label
source_id: tencent_ads_v3_0_pages_label
---
# 标签投放

标签可以帮助你的广告在外层素材上展示广告关键信息，如“热门新游”、“限时折扣”、“全屋定制”等，通过提前展示落地页内容有效提升转化率达 25%。 可以自行选择由平台的 1000+ 文案标签或者图标标签，可能被展示在图片下方或卡片样式中，可以通过[创意预览](https://developers.e.qq.com/docs/api/tools/adcreative_template_preview/adcreative_template_previews_get?version=1.1&_preview=1) 或 [广告在线预览](https://developers.e.qq.com/docs/api/tools/adcreative_preview/adcreative_previews_add?version=1.1&_preview=1) 查看素材与标签组合的效果

样式示意图：在不同媒体上，标签展示样式可能有所区别，具体请以 [广告在线预览](https://developers.e.qq.com/docs/api/tools/adcreative_preview/adcreative_previews_add?version=1.1&_preview=1) 效果为准

## 投放指南

### 一、查询可用的标签

通过[获取可用的广告标签]接口获取到可以选用的标签。 目前标签分为如下几类，可以同时使用：

| 枚举值 | 类型名称 | 使用说明 | 使用条件 |
| --- | --- | --- | --- |
| LABEL_TYPE_COMMON | 文字标签 | 从标签查询接口中根据 type = LABEL_TYPE_COMMON 查询标签库 |  |
| LABEL_TYPE_CUSTOMIZETEXT * | 自定义标签 | 直接输入 | 请联系经理开通使用权限 |
| LABEL_TYPE_ICON* | 图标标签 | 从标签查询接口中根据 type = LABEL_TYPE_ICON 查询标签库 | 请联系经理开通使用权限 |

同一个创意下，标签的个数和字数限制为： ● 文字标签与自定义标签最多 3 个，共 16 个字。 ● 图标标签最多 1 个 确定标签内容后，即可在创建创意时使用标签。

### 二、创建含有广告标签的广告创意

涉及接口：创建广告创意（dynamic_creative/add）、查询广告创意（dynamic_creative/get）、修改广告创意（dynamic_creative/update） 确定创意形式：创意形式中存在 label 元素时，说明该形式可以使用广告标签，具体可以参考创意形式查询接口：[creative_template/get](https://developers.e.qq.com/v3.0/docs/api/creative_template/get) 在创意下新增组件：创建广告创意（dynamic_creative/add）、修改广告创意（dynamic_creative/update）时在 creative_component 下增加 label 组件。 使用 label 组件的参数示例：

```
"creative_component": {
    "label": [
        {
            "value":{
                "type": ,
                "content": ,
            }
        }  
    ],
}
```

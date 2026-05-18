---
title: 自定义落地页使用指引
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/page_type_h5
doc_id: tencent_ads_v3_0_pages_page_type_h5
source_id: tencent_ads_v3_0_pages_page_type_h5
---
# 自定义落地页使用指引

# 自定义落地页的制作

广告主可以自行搭建网站制作 H5 页面，或者使用第三方建站平台的工具制作 H5 页面，并用于广告投放。

# 自定义落地页的要求

自定义落地页的长度应该不超过 1023 个字节。

自定义落地页应使用 https 协议，而不是 http 协议。

自定义落地页中不允许包含 '#' 等特殊字符，不允许增加服务器的端口号。 -自定义落地页在使用前需要在投放端进行备案，备案审核通过后才可用于广告投放，备案流程可参考 [推广链接管理](https://e.qq.com/ads/helpcenter/detail?cid=1511&pid=4450)。

自定义落地页不应该使用腾讯官方落地页制作平台创建的页面链接（包括 官方落地页、蹊径落地页、枫页落地页、微信原生页）和腾讯生态内应用的页面链接（包括 微信客服链接、微信公众号详情页等），而是使用对应的落地页类型进行投放。使用正确的落地页类型进行投放，可以提高广告系统对于页面的效果预估、转化归因的准确性。

自定义落地页在使用时应满足当前行业对于合规、风控的限制，遇到合规、风控相关的校验报错时，可以联系运营人员进行链接申报或者白名单申请。

# 自定义落地页在广告创意上的使用

使用自定义落地页创建广告创意 [创建动态创意](https://developers.e.qq.com/v3.0/docs/api/dynamic_creatives/add) dynamic_creatives/add 接口 请求参数示例：

```
{
    "creative_components": {
        "main_jump_info": [
            {
                "value": {
                    "page_type": "PAGE_TYPE_H5",
                    "page_spec": {
                        "h5_spec": {
                            "page_url": "<自定义落地页的页面链接>"
                        }
                    }
                }
            }
        ]
    }
}
```

使用自定义落地页更新广告创意 [更新动态创意](https://developers.e.qq.com/v3.0/docs/api/dynamic_creatives/update) dynamic_creatives/update 接口 请求参数示例：

```
{
    "creative_components": {
        "main_jump_info": [
            {
                "value": {
                    "page_type": "PAGE_TYPE_H5",
                    "page_spec": {
                        "h5_spec": {
                            "page_url": "<自定义落地页的页面链接>"
                        }
                    }
                }
            }
        ]
    }
}
```

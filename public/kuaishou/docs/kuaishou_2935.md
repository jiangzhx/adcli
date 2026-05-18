---
title: 人群列表查询接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2935&menuId=3685
doc_id: kuaishou_2935
source_id: kuaishou_2935
---
# 人群列表查询接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2935 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:28:56.799Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v2/dmp/population/list |
| httpMethod | GET |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| status | Integer |  |  | 人群包状态 | 0:计算中; 1: 已生效; 2: 已删除; 3: 上线中; 4: 已上线; 5: 计算失败; 6: 上线失败; 7: 已失效 |
| page | Integer |  |  | 页码，默认 1 |  |
| page_size | Integer |  |  | 页数，默认 20 | 默认为 20 行，最多不超过 500 |
| orientation_ids | Long[] |  |  | 人群包ID列表 | 支持最多填写500个orientation_id，同时数量必须小于page_size |

## 请求样例

### 请求样例 (shell)

```
curl -X POST \
  -H 'Access-Token: 8bd38d6270940cc532' \
  -H "Content-Type: application/json" \
  -d '{
  "advertiser_id": 20000016,
  "limit": 1
  }' -L https://ad.e.kuaishou.com/rest/openapi/v2/dmp/population/list
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | PopulationListData |  |  | JSON 返回值 |  |
| - orientation_id | Long |  |  | 人群包 ID |  |
| - orientation_name | String |  |  | 人群包名称 |  |
| - type | Integer |  |  | 人群数据类型 | 0：非上传人群包；1：IMEI；2：IDFA；3：IMEI_MD5；4：IDFA_MD5；5：手机号-MD5；9: 手机号_SHA256;16：CAID |
| - population_type | Integer |  |  | 人群包类型 | 1,"上传人群"；2,"广告人群"；3,"主题专区"；4,"逻辑规则"；5,"人群扩展"；6,平台定制包（仅用于DSP排除包进行使用）；7,"三方精选"；8,"网红粉丝类别"；10,"移动应用安装"；11,"快手使用活跃度"；12,"行业分类"；13,"商业兴趣"；17,"产品关键词"；19,"应用渗透率"；20,"快手小店"；21,"流量中台"；22,"指定网红"；23,"行业分类"；24,"广告人群"；25,"全量网红粉丝"；26,"移动应用安装"；27,"平台设备网络"；28,"年龄"；29,"设备价格区间"；33,"品牌广告精确转化"；34,"标签广场计算包"；32,"地域"；35,"大宗消费意向"；36,"性别"；37,"网红粉丝优化"；38,"小店专区"；41,"购物意图"；42,"已有人群交并补计算"；43,"行为意向"；44,"财产状态"；45,"居住分层"；46,"品类行为"；47,"用户消费分层"；50,"店铺粉丝分层"；49,"店铺新老客分层"；48,"店铺用户行为"；51,"标签推荐"；54,"店铺关注时间"；57,"K-Star(明星；58,门店管理"；59,"品牌行为"；60,"学历"；61,"人生阶段"；62,"直播打赏"；63,"节日专区"；64,"相似店铺"；65,"系统推荐"；66,"汽车购买意图"；67,"汽车价格"；68,"汽车类型"；69,"汽车动力"；70,"汽车品牌"；71,"汽车座位"；72,"汽车人群类型"；73,"二手车偏好"；74,"奥运专区"；75,"CDP人群"；76,"数据源"；77,"视频类型偏好"；78,"IP偏好"；79,"九大消费人群"；80,"个人贷款需求"；81,"个人保险兴趣"；82,"保险类型偏好"；83,"证券兴趣人群"；84,"金融负反馈人群"；85,"金融风险人群"；86,"金融属性人群"；87,"CDP上传人群"；88,"学历教育"；89,"职业教育认证"；90,"职业教育技能"；91,"财商教育兴趣"；92,"少儿教育兴趣"；93,"游戏内容兴趣"；94,"潜在付费人群"；95,"店铺粉丝团等级"；96,"定制年龄性别"；97,"品牌客户分层"；98,"自定义店铺关注时间"；99,"类目消费频次"；100,"类目客单价"；101,"职业"；102,"星轨SQL打包"；103,"画像平台导入" |
| - src_type | Integer |  |  | 人群包来源 | 0：DMP平台（磁力万象）；1：MAPI平台；2：CDP平台（磁力方舟）；3：CDP投放共建类型 |
| - record_size | Long |  |  | 上传数量 |  |
| - match_size | Long |  |  | 匹配数量 |  |
| - status | Integer |  |  | 人群包状态 | 0:计算中; 1: 已生效; 2: 已删除; 3: 上线中; 4: 已上线; 5: 计算失败; 6: 上线失败; 7: 已失效 |
| - create_time | Long |  |  | 创建时间 | 格式：13 位毫秒级时间戳 |
| - third_platform_code | Integer |  |  | 付费人群包-第 3 方平台 code | 选择付费人群包创建广告时付费人群包 third_platform_code 必须一致 |
| - third_platform_name | String |  |  | 付费人群包第三方供应商名称 |  |
| - verify_time | Long |  |  | 更新时间 | 格式：13位毫秒级时间戳 |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data":{
    total_count:1,
    "details": [{
        "orientation_id": 10000008,
        "orientation_name": "101",
        "type": 0,
        "population_type": 13,
        "record_size": 0,
        "match_size": 0,
        "cover_num": 100,
        "status": 4,
        "create_time": 1552366925727
    }]
    }
}
```

// Generated from github.com/bububa/kwai-marketing-api/model/dsp/dpa/secret_cid_link.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { UrlParamSneak, VideoInfo } from "./product";

export interface SecretCidLinkRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
  product_name?: string;
  outer_id?: string;
  title?: string;
  description?: string;
  main_image?: string[];
  image_urls?: string[];
  video_url?: VideoInfo;
  en_brand?: string;
  value?: string;
  saving?: string;
  discount?: string;
  price?: string;
  sales_promotion?: string;
  down_payment?: string;
  mortgage?: string;
  daily_mortgage?: string;
  address?: string;
  feature?: string;
  age_v2?: string[];
  gender?: number;
  province_v2?: string[];
  city_v2?: string[];
  target_url?: UrlParamSneak;
  brand_url?: UrlParamSneak;
  schedule_url?: UrlParamSneak;
  shop_keeper_url?: UrlParamSneak;
  category_url?: UrlParamSneak;
  slogan?: string;
  ecom_product_info?: EcomProductInfo;
  condition?: string;
  comments?: number;
  mark?: string;
}

export class SecretCidLinkRequest implements PostRequest, SecretCidLinkRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
  product_name?: string;
  outer_id?: string;
  title?: string;
  description?: string;
  main_image?: string[];
  image_urls?: string[];
  video_url?: VideoInfo;
  en_brand?: string;
  value?: string;
  saving?: string;
  discount?: string;
  price?: string;
  sales_promotion?: string;
  down_payment?: string;
  mortgage?: string;
  daily_mortgage?: string;
  address?: string;
  feature?: string;
  age_v2?: string[];
  gender?: number;
  province_v2?: string[];
  city_v2?: string[];
  target_url?: UrlParamSneak;
  brand_url?: UrlParamSneak;
  schedule_url?: UrlParamSneak;
  shop_keeper_url?: UrlParamSneak;
  category_url?: UrlParamSneak;
  slogan?: string;
  ecom_product_info?: EcomProductInfo;
  condition?: string;
  comments?: number;
  mark?: string;

  constructor(init: SecretCidLinkRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.unit_id = init.unit_id;
    this.product_name = init.product_name;
    this.outer_id = init.outer_id;
    this.title = init.title;
    this.description = init.description;
    this.main_image = init.main_image;
    this.image_urls = init.image_urls;
    this.video_url = init.video_url;
    this.en_brand = init.en_brand;
    this.value = init.value;
    this.saving = init.saving;
    this.discount = init.discount;
    this.price = init.price;
    this.sales_promotion = init.sales_promotion;
    this.down_payment = init.down_payment;
    this.mortgage = init.mortgage;
    this.daily_mortgage = init.daily_mortgage;
    this.address = init.address;
    this.feature = init.feature;
    this.age_v2 = init.age_v2;
    this.gender = init.gender;
    this.province_v2 = init.province_v2;
    this.city_v2 = init.city_v2;
    this.target_url = init.target_url;
    this.brand_url = init.brand_url;
    this.schedule_url = init.schedule_url;
    this.shop_keeper_url = init.shop_keeper_url;
    this.category_url = init.category_url;
    this.slogan = init.slogan;
    this.ecom_product_info = init.ecom_product_info;
    this.condition = init.condition;
    this.comments = init.comments;
    this.mark = init.mark;
  }

  path() {
    return "gw/dsp/dpa/secret/cid/link";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      unit_id: this.unit_id,
      product_name: this.product_name,
      outer_id: this.outer_id,
      title: this.title,
      description: this.description,
      main_image: this.main_image,
      image_urls: this.image_urls,
      video_url: this.video_url,
      en_brand: this.en_brand,
      value: this.value,
      saving: this.saving,
      discount: this.discount,
      price: this.price,
      sales_promotion: this.sales_promotion,
      down_payment: this.down_payment,
      mortgage: this.mortgage,
      daily_mortgage: this.daily_mortgage,
      address: this.address,
      feature: this.feature,
      age_v2: this.age_v2,
      gender: this.gender,
      province_v2: this.province_v2,
      city_v2: this.city_v2,
      target_url: this.target_url,
      brand_url: this.brand_url,
      schedule_url: this.schedule_url,
      shop_keeper_url: this.shop_keeper_url,
      category_url: this.category_url,
      slogan: this.slogan,
      ecom_product_info: this.ecom_product_info,
      condition: this.condition,
      comments: this.comments,
      mark: this.mark,
    });
  }
}

export interface EcomProductInfo {
  spu_id?: string;
  service_provider_name?: string;
  corporation_name?: string;
  ecom_platform_from_service?: string;
  shopF_name_from_service?: string;
  brand_name_from_service?: string;
  first_product_category_from_service?: string;
  second_product_category_from_service?: string;
  third_product_category_from_service?: string;
  fourth_product_category_from_service?: string;
  product_label?: string;
  comment_tags?: string;
  service_tags?: string;
  attribute_tags?: string;
  shop_id_from_service?: number;
  brand_id_from_service?: number;
  first_product_category_id_from_service?: number;
  second_product_category_id_from_service?: number;
  third_product_category_id_from_service?: number;
  fourth_product_category_id_from_service?: number;
  bought?: number;
}

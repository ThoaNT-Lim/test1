import React, { Fragment, useState } from "react";
import Slideshow from './comp/slider/index';
import Rater from './rate';
import Upfile from './comp/upload.js';
import Count from './comp/count.js';
import "antd/dist/antd.css";
import "../asset/styles/base.scss";
import { Row, Col, Card, Radio, Button, Form, Input, Rate, TreeSelect } from "antd";
import Product1 from "../asset/images/product1.png";
import Location from "../asset/images/location.png";
import Dilivery from "../asset/images/diliver.png";
import Dilivery2 from "../asset/images/dilivery2.png";

const plainOptions = ["Có sữa", "Không có sữa"];
const options = [{ label: "Apple", value: "Apple" }];
const { TreeNode } = TreeSelect;

const optionsWithDisabled = [{ label: "Apple", value: "Apple" }];

class Page extends React.Component {
  count = {
      value: 0,
  }
  onCount = (e) => {
      this.setState({
          value: e.target.value,
      })
  }
  state = {
    value: 1,
  };
  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const { value1, value2 } = this.state;
    return (
      <Fragment>
        <Row>
          <Col span={3}></Col>
          <Col span={7} ><Slideshow /></Col>
          <Col span={6} >
          <Card
              title="Bột Dashi Wakodo Nhật Bản 800G (Trên 5 
                tháng)"
              bordered={false}
              style={{ width: 500 }}
              className="detail-product"
            >
              <Rate />
              <span>200 000 đ</span>
              <span>186 000 đ</span>
              <div>
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>Có sữa</Radio>
                  <br />
                  <Radio value={2}>Không có sữa</Radio>
                </Radio.Group>
              </div>
              <br />
              <Count />
              <Button type="danger" className="btn-big">
                Thêm vào giỏ hàng
              </Button>
                <ul>
                  <li>itamin và nguồn năng lượng cần thiết</li>
                  <li>Bổ sung vitamin và nguồn năng lượng</li>
                  <li>Bổ sung vitamin và nguồn năng lượng cần thiết</li>
                  </ul>
            </Card>
          </Col>
          <Col span={6} >
          <Card
              title="Tùy chọn giao hàng"
              bordered={false}
              style={{ width: 500 }}
            >
              <div>
                <img src={Location} alt="location" />
                <span>Giao hàng tiêu chuẩn</span>
              </div>
              <div>
                <img src={Dilivery} alt="giao hang tieu chuan" />
                <span>Giao hàng tiêu chuẩn</span> 
                <span>Miễn phí</span>
              </div>
              <div>
                <img src={Dilivery2} alt="giao hang nhanh" />
                <span>Giao hàng nhanh</span>
                <span>20 000 đ</span>
              </div>
              <br />
            </Card>
          </Col>
         </Row>
         <div className="rate-product">
           <Row>
           <Col span={4}></Col>
           <Col span={16}>
             <h2>Đánh giá sản phẩm</h2>
           <p>Sản phẩm chưa có đánh giá</p>
            <p>Viết đánh giá của bạn</p>
            <form>
                <Rate />
                <br />
                <Input placeholder="Nhập đánh giá"/>
                <div>
                <span><Upfile /></span>
                <span><Button type="primary" htmlType="submit">
                        Submit
                </Button>
                </span>
                </div>
            </form>
           </Col>
           <Col span={4}>3</Col>
           </Row>
         </div>
      </Fragment>
    );
  }
}

export default Page;

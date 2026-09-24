import classNames from "classnames/bind";

import { Carousel } from 'antd';

import styles from "./HomePage.module.scss";
import ButtonCustom from "~/components/ButtonCustom";
import { TYPES_PRODUCT } from "~/constants";
import { BANNERS } from "~/constants";
import CardComponent from "~/layouts/components/CardComponent";

const cx = classNames.bind(styles);

function HomePage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        {TYPES_PRODUCT.map((type, index) => (
          <ButtonCustom key={index} text >{type}</ButtonCustom>
        ))}
      </div>

      <Carousel autoplay arrows infinite>
        {BANNERS.map(slide => (
          <div key={slide.id}>
            <div className={cx("slide")}>
              {slide.items.map(item => (
                <a key={item.id} href={item.href} className={cx("banner")}>
                  <img src={item.image} alt={item.alt} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </Carousel>

      <div className={cx("content")}>
        <CardComponent />
        <ButtonCustom outline size="large" className={cx("button")}>Xem thêm</ButtonCustom>
      </div>

      <div className="" style={{ height: "1000px" }}>body</div>
    </div>
  );
}

export default HomePage;
import { Card } from 'antd';

function CardCustom({ className }) {
  const { Meta } = Card;

  return (
    <Card
      className={className}
      hoverable
      variant="borderless"
      // style={{ width: 240 }}
      cover={
        <img
          draggable={false}
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
}

export default CardCustom;
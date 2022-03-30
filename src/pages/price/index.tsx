import React from 'react';
import { Button, Card, Form, Input } from 'antd';
import { PriceModule } from './priceModule';

const createItem = () => {
  return {
    key: Date.now(),
  };
};

export default function () {
  const [data, setData] = React.useState<Record<string, any>[]>([createItem()]);
  const handleAdd = () => {
    setData((preData) => {
      return [...preData, createItem()];
    });
  };
  return (
    <Card
      title="报价计算器"
      bordered={false}
      extra={
        <Button
          onClick={() => {
            handleAdd();
          }}
        >
          新增模块
        </Button>
      }
    >
      {data.map((item) => (
        <Card.Grid key={item.key}>
          <PriceModule />
        </Card.Grid>
      ))}
    </Card>
  );
}

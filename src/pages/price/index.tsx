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
    // <div>
    //   <h3>
    //     报价计算器 <Button>新增模块</Button>
    //   </h3>
    //   <div className="moduleList">
    //     <div className="module">
    //       <div className="moduleHeader">
    //         <div>
    //           总价：
    //           <input type="number" className="totalPrice" />
    //         </div>
    //         <span className="closeModuleButton">x</span>
    //       </div>
    //       <ol className="list">
    //         <li className="item">
    //           <input type="number" className="count" placeholder="数量" />
    //           <input type="number" className="price" placeholder="单价" />
    //           <span className="delButton">删除</span>
    //           <br />
    //         </li>
    //       </ol>
    //       <div className="addButton">+添加</div>
    //       <div className="submit">等于总价</div>
    //     </div>
    //   </div>
    // </div>
  );
}

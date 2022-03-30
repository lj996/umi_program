import React from 'react';
import { Button, Form, Input, InputNumber, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export function PriceModule() {
  const [form] = Form.useForm();
  React.useEffect(() => {
    form.setFieldsValue({
      totalPrice: 100,
      priceList: [{}],
    });
  }, []);
  const handleSubmit = () => {
    form.validateFields().then((values) => {
      console.log('values', values);
    });
  };
  return (
    <Form form={form}>
      <Form.Item label="总价" name="totalPrice">
        <InputNumber min={1} style={{ width: 150 }} />
      </Form.Item>
      <Form.List name="priceList">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => {
              return (
                <Space key={key} style={{ display: 'flex' }} align="baseline">
                  <Form.Item {...restField} name={[name, 'goodName']}>
                    <Input placeholder="商品名称" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'count']}
                    rules={[{ required: true, message: '数量必填' }]}
                  >
                    <InputNumber placeholder="数量" min={1} precision={0} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'price']}
                    rules={[{ required: true, message: '单价必填' }]}
                  >
                    <InputNumber placeholder="单价" min={0} />
                  </Form.Item>
                  <Button type="link" onClick={() => remove(name)}>
                    删除
                  </Button>
                </Space>
              );
            })}
            <div style={{ textAlign: 'right' }}>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ marginRight: 8 }}
                icon={<PlusOutlined />}
              >
                添加商品
              </Button>
              <Button type="primary" onClick={handleSubmit}>
                等于总价
              </Button>
            </div>
          </>
        )}
      </Form.List>
    </Form>
  );
}

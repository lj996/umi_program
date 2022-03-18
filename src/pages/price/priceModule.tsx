import React from 'react';
import { Button, Card, Form, Input } from 'antd';

export function PriceModule() {
  const [form] = Form.useForm();
  return <Form form={form}></Form>;
}

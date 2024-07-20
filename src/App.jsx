import './App.css'
import axios from "./api/axios.jsx";
import {Button, Form, Input} from 'antd';

const onFinish = async (values) => {
  const obj = {
    ...values,
    chat_id: 1196343136
  }
  try {
    const res = await axios.post("/bot7410941395:AAFQuB74iyNF-i8UwgzoGbYcAvFHhtxQUDM/sendMessage", obj)
    form.resetFields();
  } catch (error) {
    console.log(error)
  }
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function App() {

  return (
    <>

      <div className="w-full h-screen bg-blue-500 flex justify-center items-center">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="bg-white p-5 rounded-2xl"
        >
          <Form.Item
            label="Message"
            name="text"
            rules={[
              {
                required: true,
                message: 'Please input your message!',
              },
            ]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

    </>
  )
}

export default App

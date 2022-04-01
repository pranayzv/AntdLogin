import React ,{ Component} from "react";
import 'antd/dist/antd.css'; 

import {Form, Button, Input, DatePicker,InputNumber} from "antd";


class RegisterComponent extends Component{

    render(){
        return(

            <div>   
                <Form>
                    <Form.Item name="fullname" label="Full Name" rules={[
                       { required: true,
                        message: "mandatory field"
                       },
                       {whitespace: true,
                        message: "whitespaces not allowed",
                        },{ min: 3,
                        max: 8,
                        message: "length allowed (3-8)"
                        }
                    
                    ]}>
                        <Input  />
                    </Form.Item >
                    
                    <Form.Item name="username" label="Username" rules={[{
                        required: true,
                        message: "mandatory field",
                        whitespace: false,
                        message: "whitespaces not allowed",
                        min: 3,
                        max: 8,
                        message: "length allowed (3-8)"
                    }
                    ]} > 
                    <Input />
                    </Form.Item>
                    
                    <Form.Item name="pass" label="Password" rules={[{
                        required: true,
                        message: "mandatory field",
                        whitespace: false,
                        message: "whitespaces not allowed",
                        min: 8,
                        max: 12,
                        message: "length allowed (3-8)"
                    }
                    ]} >
                    <Input.Password  />
                    </Form.Item>
                    
                    <Form.Item name="mob" label="Mobile" rules={[{
                        required: true,
                        message: "mandatory field",
                        whitespace: false,
                        message: "whitespaces not allowed",
                        min: 10,
                        len: 10,
                        message: "length allowed (10)"
                    }
                    ]} >
                   
                    </Form.Item>
                    
                    <Form.Item name="website" label="WebSite" rules={[{
                        required: false,
                        whitespace: false
                    }
                    ]} >
                    <Input  />
                    </Form.Item>
                    
                    <Form.Item name="dob" label="Date Of Birth" rules={[{
                        required: true,
                        message: "mandatory field",
                    }
                    ]}>
                    <DatePicker picker="date" placeholder="DOB" />
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
                </Form>
            </div>
        );
    }

}


export default RegisterComponent;
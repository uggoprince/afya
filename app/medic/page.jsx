"use client";
import { SideBar } from "../components/Sidebar";
import SidebarItem from "../components/Sidebar/SidebarItem";
import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton, Modal, Form, Input, Flex, Checkbox, Space, Spin } from 'antd';
import { LockOutlined, UserOutlined, PlusOutlined, MinusCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import MedicSidebar from "../components/Sidebar/MedicSidebar";
import { ExclamationCircleFilled } from '@ant-design/icons';

const { confirm } = Modal;

const count = 9;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;


export default function DoctorDashboard() {
    const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);
    const onLoadMore = () => {
        setLoading(true);
        setList(
          data.concat(
            [...new Array(count)].map(() => ({
              loading: true,
              name: {},
              picture: {},
            })),
          ),
        );
        fetch(fakeDataUrl)
          .then((res) => res.json())
          .then((res) => {
            const newData = data.concat(res.results);
            setData(newData);
            setList(newData);
            setLoading(false);
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event('resize'));
          });
    };
    const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
    const [open, setOpen] = useState(false);
    const toggleModal = () => {
      setOpen(!open);
    }
    return (
      <>
        <div className="w-full flex flex-row overflow-hidden">
            <MedicSidebar />
            <div className="main-content flex flex-col flex-1 h-screen overflow-y-auto relative">
                <div className="font-bold w-full text-[20px] bg-[#FFFCF8]
                    text-sky-950 sticky top-0 z-[20] px-8 py-2 flex flex-row justify-between">
                  {'Prescribtions'}
                  <button className='
                  bg-sky-400 hover:bg-sky-400/80 
                  text-white px-2 py-1 rounded'
                  onClick={toggleModal}>Create Prescription</button>
                </div>
                <div className="p-8 max-w-[800px] w-full mb-[200px] h-auto">
                    <List
                        className="demo-loadmore-list w-full"
                        loading={initLoading}
                        itemLayout="horizontal"
                        loadMore={loadMore}
                        dataSource={list}
                        renderItem={(item) => (
                            <List.Item
                            actions={[<a key="list-loadmore-edit" className=" text-blue-700">View</a>, 
                                <a key="list-loadmore-more" className=" text-blue-700">Update</a>]}
                            >
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                avatar={<Avatar src={item.picture.large} size={64} />}
                                title={<span className=" text-[#458FF6]">{item.name?.last}</span>}
                                description={<span className=" text-sky-950">{"Take the following, prescribtion for your ailment."}</span>}
                                />
                                <div className=" text-sky-950">5 doses</div>
                            </Skeleton>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </div>
        <Spin spinning={true} indicator={<LoadingOutlined spin />} size="large">
          <Modal
            title="New Prescribtion"
            open={open}
            onOk={() => {
              setOpen(false);
            }}
            onCancel={() => setOpen(false)}
            okText={'Submit'}
          >
            <Form
              name="login"
              initialValues={{
                remember: false,
              }}
              onFinish={() => {}}
              className="w-full"
            >
              <Form.Item
                name="patientId"
                rules={[
                  {
                    // required: true,
                    // message: 'Please input your Username!',
                  },
                ]}
              >
                <Input placeholder="Patient Id" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    // required: true,
                    // message: 'Please input your Password!',
                  },
                ]}
              >
                <Input placeholder="Patient Name" />
                {/* <Input prefix={<LockOutlined />} type="password" placeholder="Password" /> */}
              </Form.Item>

              <Form.List name="users">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{
                          display: 'flex',
                          marginBottom: 8,
                        }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, 'first']}
                          rules={[
                            {
                              required: true,
                              message: 'Missing medication.',
                            },
                          ]}
                        >
                          <Input placeholder="Medication" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'last']}
                          rules={[
                            {
                              required: true,
                              message: 'Missing dosage',
                            },
                          ]}
                        >
                          <Input placeholder="Dosage" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'last']}
                          rules={[
                            {
                              required: true,
                              message: 'Missing frequency',
                            },
                          ]}
                        >
                          <Input placeholder="Frequency" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'last']}
                          rules={[
                            {
                              required: true,
                              message: 'Missing duration.',
                            },
                          ]}
                        >
                          <Input placeholder="Duration" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        Add field
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form>
          </Modal>
        </Spin>
      </>
    );
}

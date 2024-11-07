"use client";
import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton, Modal } from 'antd';
import AdminSidebar from "../components/Sidebar/AdminSidebar";

const { confirm } = Modal;

const count = 9;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const prescriptionsUrlEndpoint = "/api/prescriptions";

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
      fetch('/api/prescriptions', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
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

    return (
      <>
        <div className="w-full flex flex-row overflow-hidden">
            <AdminSidebar />
            <div className="main-content flex flex-col flex-1 h-screen overflow-y-auto relative">
                <div className="font-bold w-full text-[20px] bg-[#FFFFFF]
                    text-sky-950 sticky top-0 z-[20] px-8 py-2 flex flex-row justify-between">
                  {'Prescribtions'}
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
      </>
    );
}

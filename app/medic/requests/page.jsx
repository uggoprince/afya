"use client";
import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import MedicSidebar from "@/app/components/Sidebar/MedicSidebar";
const count = 9;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;


export default function RequestsToDoctor() {
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
    return (
        <div className="w-full flex flex-row overflow-hidden">
            <MedicSidebar />
            <div className="main-content flex flex-col flex-1 h-screen overflow-y-auto">
                <div className="w-full font-bold text-[20px] 
                    text-sky-950 fixed bg-[#f5f5f5] z-[20] mt-[-32px] ml-[-32px] px-8 py-2">Requests</div>
                <div className=" max-w-[800px] w-full mb-[200px] mt-[50px] h-auto">
                    <List
                        className="demo-loadmore-list w-full"
                        loading={initLoading}
                        itemLayout="horizontal"
                        loadMore={loadMore}
                        dataSource={list}
                        renderItem={(item) => (
                            <List.Item
                            actions={[<a key="list-loadmore-edit" className=" text-blue-700">View</a>]}
                            >
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                avatar={<Avatar src={item.picture.large} size={64} />}
                                title={<span className=" text-[#458FF6]">{item.name?.last}</span>}
                                description={<span className=" text-sky-950">{"I need medical help for my malaria and asthma."}</span>}
                                />
                                <div className=" text-sky-950">Urgent</div>
                            </Skeleton>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

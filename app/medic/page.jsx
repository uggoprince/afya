"use client";
import { SideBar } from "../components/Sidebar";
import SidebarItem from "../components/Sidebar/SidebarItem";
import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
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
    return (
        <div className="w-full flex flex-row overflow-hidden">
            <SideBar>
                <SidebarItem label={'Prescriptions'} link={'/medic'} icon={'../../public/dashboard.svg'}>
                </SidebarItem>
                <SidebarItem label={'Requests'} link={'/medic'}>
                </SidebarItem>
                <SidebarItem label={'Inventories'} link={'/medic'}></SidebarItem>
                <SidebarItem label={'Patients'} link={'/medic'}></SidebarItem>
                <SidebarItem label={'Settings'} link={'/medic'}></SidebarItem>
                <SidebarItem label={'Logout'} link={'/'}></SidebarItem>
            </SideBar>
            <div className="main-content flex flex-col flex-1 h-screen overflow-y-auto">
                <div className="w-full font-bold text-[40px] 
                    text-sky-950 fixed bg-white z-[20] mt-[-32px] ml-[-32px] px-8">Prescribtions</div>
                <div className=" max-w-[800px] w-full mb-[200px] mt-[50px] h-auto">
                    <List
                        className="demo-loadmore-list w-full"
                        loading={initLoading}
                        itemLayout="horizontal"
                        loadMore={loadMore}
                        dataSource={list}
                        renderItem={(item) => (
                            <List.Item
                            actions={[<a key="list-loadmore-edit" className=" text-blue-700">view</a>, 
                                <a key="list-loadmore-more" className=" text-blue-700">update</a>]}
                            >
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                avatar={<Avatar src={item.picture.large} />}
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
    );
}

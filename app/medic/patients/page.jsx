"use client";
import React, { useEffect, useState } from 'react';
import { Avatar, Button, Card, List, Skeleton } from 'antd';
import MedicSidebar from "@/app/components/Sidebar/MedicSidebar";
const count = 9;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const { Meta } = Card;

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
                    text-sky-950 fixed bg-[#FFFFFF] z-[20] px-8 py-2">Patients</div>
                <div className="w-full p-8 flex justify-evenly mb-[200px] mt-[50px] h-auto">
                    <List
                      grid={{ gutter: 8,
                        xs: 1,  // 1 column for extra-small screens
                        sm: 1,  // 1 column for small screens
                        md: 2,  // 2 columns for medium screens
                        lg: 3,  // 4 columns for large screens
                        xl: 4,  // 4 columns for extra-large screens
                       }}
                      dataSource={list}
                      renderItem={(item) => (
                        <List.Item style={{ display: 'flex', justifyContent: 'center' }}>
                          <Card
                            hoverable
                            className='w-full max-w-[300px] md:max-w-[180px]'
                            cover={<img alt="example" src={`${item.picture.large}`} />}
                          >
                            <Meta title={<span className=" text-[#458FF6]">{item.name?.title} {item.name?.first}</span>}
                              description="Engineer" />
                            <div className='pt-2 text-slate-600'>Prescibtions: 5</div>
                          </Card>
                        </List.Item>
                      )}
                    />
                </div>
            </div>
        </div>
    );
}

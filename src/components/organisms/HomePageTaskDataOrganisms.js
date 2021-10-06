import React from "react";
import MaterialTable from 'material-table';

const waitTime = 600

const HomePageTaskData = (
  rowAddHandler,
  rowUpdateHandler,
  rowDeleteHandler,
) => {

  return (
    <MaterialTable
      columns={[
        { title: 'タスク名', field: 'name' },
        { title: '依頼者', field: 'client' },
        { title: '期限', field: 'deadline' },
      ]}
      data={[
        { id: 1, name: 'チョコレート', client: 'お菓子', deadline: '2021/02/16' },
        { id: 2, name: 'ケーキ', client: 'お菓子', deadline: '2021/03/01' },
        { id: 3, name: 'りんご', client: 'フルーツ', deadline: '2021/04/21' },
        { id: 4, name: 'バナナ', client: 'フルーツ', deadline: '2021/06/30' },
        { id: 5, name: 'みかん', client: 'フルーツ', deadline: '2021/07/26' },
      ]}
      options={{
        showTitle: false,
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve()
              rowAddHandler(newData)
            }, waitTime)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve()
              if (oldData) {
                rowUpdateHandler(newData, oldData)
              }
            }, waitTime)
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve()
              rowDeleteHandler(oldData)
            }, waitTime)
          }),
      }}
    />
  );
};

export default HomePageTaskData;
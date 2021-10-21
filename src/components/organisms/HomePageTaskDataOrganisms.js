import React from "react";
import MaterialTable from 'material-table';
import localizationJapanese from './LocalizationJapanese';

const waitTime = 600

const HomePageTaskData = ({
  rowAddHandler,
  rowUpdateHandler,
  rowDeleteHandler,
  data
}) => {
  return (
    <MaterialTable
      columns={[
        { title: '番号', field: 'num', hidden: true },
        { title: 'タスク名', field: 'name' },
        { title: '依頼者', field: 'client' },
        { title: '期限', field: 'deadline' },
      ]}
      data={data.taskList}
      localization={localizationJapanese}
      options={{
        showTitle: false,
      }}
      editable={{
        onRowAdd: (task) =>
          new Promise((resolve) => {
            setTimeout(() => {
              rowAddHandler(task)
              resolve();
            }, waitTime)
          }),
        onRowUpdate: (newtask, oldtask) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve()
              if (oldtask) {
                rowUpdateHandler(newtask, oldtask)
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
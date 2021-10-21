import React from "react";
import GenericTemplate from "../components/templates/GenericTemplate";
import TaskTableContainer from "../containers/TaskTableContainer"

const TopPage = () => {
  return (
    <GenericTemplate title="タスク一覧">
      <TaskTableContainer />
    </GenericTemplate>
  );
};

export default TopPage;
import React from "react";
import GenericTemplate from "../components/templates/GenericTemplate";
import HomePageTaskData from "../components/organisms/HomePageTaskDataOrganisms"

const TopPage = () => {
  return (
    <GenericTemplate title="タスク一覧">
      <HomePageTaskData />
    </GenericTemplate>
  );
};

export default TopPage;
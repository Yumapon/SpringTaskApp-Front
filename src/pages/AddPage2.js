import React from "react";
import GenericTemplate from "../components/templates/GenericTemplate";
import Checkout from "../components/organisms/AddTaskOrganisms"

const AddPage = () => {
  return (
    <GenericTemplate title="タスク追加">
      <Checkout />
    </GenericTemplate>
  );
};

export default AddPage;
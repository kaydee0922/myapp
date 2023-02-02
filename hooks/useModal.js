import React, { createContext, useContext, useState } from "react";

// const modalContext = createContext(false);
export default useModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return {
    modalVisible,
  };
};

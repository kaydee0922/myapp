import { Text, View, ScrollView, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Extended from "./SliderExtended";
import styles from "../assets/StyleSheet/StyleSheet";

const SliderScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    if (modalVisible === false) {
      setModalVisible(true);
    }
  };
  const closeModal1 = () => {
    if (modalVisible === true) {
      setModalVisible(false);
      return;
    }
  };

  return (
    <ScrollView>
      <View
        style={[
          styles.box,
          {
            opacity: 0.6,
            paddingVertical: 10,
          },
        ]}
      >
        <TouchableOpacity style={styles.buttonStyle} onPress={openModal}>
          <Text>1</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalBox}>
            <View style={styles.modalView}>
              <Extended />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default SliderScreen;

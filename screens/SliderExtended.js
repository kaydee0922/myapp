import {
  Text,
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import styles from "../assets/StyleSheet/StyleSheet";

const SliderExtended = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    if (modalVisible === false) {
      setModalVisible(true);
    }
  };
  const closeModal = () => {
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
              <TouchableOpacity onPress={closeModal}>
                <Text>HELLO WORLD</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default SliderExtended;

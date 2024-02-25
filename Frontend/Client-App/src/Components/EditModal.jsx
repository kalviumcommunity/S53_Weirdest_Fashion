import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

const EditModal = ({ isOpen, onClose, initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData((prev)=>({
        ...prev,
        [name]: value,
    }));
  };
  const handleSubmit = () => {
    onSubmit(formData)
    console.log('formData', formData)
    onClose()
  };
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Your Collection</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormControl>
              <FormLabel m={0} fontFamily={"Kotta"}>
                Name
              </FormLabel>
              <Input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel m={0} fontFamily={"Kotta"}>
                Event
              </FormLabel>
              <Input
                type="text"
                name="Event"
                value={formData.Event}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel m={0} fontFamily={"Kotta"}>
                Date of Event
              </FormLabel>
              <Input
                type="text"
                name="Date_Of_Event"
                value={formData.Date_Of_Event}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel m={0} fontFamily={"Kotta"}>
                Image Link
              </FormLabel>
              <Input
                type="url"
                name="Image_Link"
                value={formData.Image_Link}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel m={0} fontFamily={"Kotta"}>
                Description
              </FormLabel>
              <Textarea
                type="text"
                name="Description"
                value={formData.Description}
                onChange={handleChange}
              />
            </FormControl>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Save Changes
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditModal;

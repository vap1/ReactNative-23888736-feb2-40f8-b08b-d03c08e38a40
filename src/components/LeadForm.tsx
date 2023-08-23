
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

interface LeadFormProps {
  onSubmit: (leadData: LeadDetails) => void;
}

interface LeadDetails {
  // Define the fields for lead details here
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit }) => {
  const [leadData, setLeadData] = useState<LeadDetails>({
    // Initialize the lead details fields here
  });

  const handleInputChange = (field: keyof LeadDetails, value: string) => {
    setLeadData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Perform validation on leadData fields here
    if (/* validation condition */) {
      Alert.alert('Validation Error', 'Please fill in all required fields');
      return;
    }

    onSubmit(leadData);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter lead name"
        value={leadData.name}
        onChangeText={(value) => handleInputChange('name', value)}
      />
      {/* Add more TextInput components for other lead details fields */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default LeadForm;
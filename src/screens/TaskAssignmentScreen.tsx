
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { TaskDetails, UserRegistrationResponse } from '../api/types';
import { getTasks } from '../api/api';

const TaskAssignmentScreen: React.FC = () => {
  const [tasks, setTasks] = useState<TaskDetails[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response: UserRegistrationResponse = await getTasks();
      if (response.success) {
        setTasks(response.tasks);
      } else {
        console.log('Error fetching tasks:', response.errorMessage);
      }
    } catch (error) {
      console.log('Error fetching tasks:', error);
    }
  };

  const renderTaskItem = ({ item }: { item: TaskDetails }) => (
    <TouchableOpacity onPress={() => handleTaskPress(item)}>
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>{item.status}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleTaskPress = (task: TaskDetails) => {
    // Handle task press action
  };

  return (
    <View>
      <Text>Task Assignment Screen</Text>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TaskAssignmentScreen;
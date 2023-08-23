
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { OpportunityDetails } from '../api/types';
import { getOpportunities } from '../api/opportunities';

const OpportunityTrackingScreen: React.FC = () => {
  const [opportunities, setOpportunities] = useState<OpportunityDetails[]>([]);

  useEffect(() => {
    fetchOpportunities();
  }, []);

  const fetchOpportunities = async () => {
    try {
      const response = await getOpportunities();
      setOpportunities(response);
    } catch (error) {
      console.error('Error fetching opportunities:', error);
    }
  };

  const renderOpportunityItem = ({ item }: { item: OpportunityDetails }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.status}</Text>
      {/* Render other opportunity details */}
    </View>
  );

  return (
    <View>
      <Text>Opportunity Tracking</Text>
      <FlatList
        data={opportunities}
        renderItem={renderOpportunityItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default OpportunityTrackingScreen;
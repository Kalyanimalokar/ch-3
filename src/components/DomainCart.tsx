import React from 'react';
import { VStack, Box, Button, Text } from '@chakra-ui/react';
import { Domain } from './challenge';


interface DomainCartProps {
  domains: Domain[];
  onDeleteDomain: (domain: string) => void;
}

const DomainCart: React.FC<DomainCartProps> = ({ domains, onDeleteDomain }) => {
  return (
    <VStack spacing={4} align="stretch">
      {domains.map((domain) => (
        <Box key={domain.name} display="flex" justifyContent="space-between">
          <Text>{domain.name} ({domain.isAvailable ? 'Available' : 'Unavailable'})</Text>
          <Button size="sm" colorScheme="red" onClick={() => onDeleteDomain(domain.name)}>Delete</Button>
        </Box>
      ))}
    </VStack>
  );
};

export default DomainCart;

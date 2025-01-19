"use client";

import React from "react";
import Box from "~/_components/Box";
import BoxGrid from "~/_components/BoxGrid";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";

function Dashboard() {
  return (
    <Container>
      <BoxGrid columns={4} mdColumns={2} gap={1}>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </BoxGrid>
      <div className="flex gap-4 mt-4">
        <Box className="w-3/5 h-96"></Box>
        <Box className="w-2/5 h-96"></Box>
      </div>
        <Box className="h-96 mt-4"></Box>
      
    </Container>
  );
}

export default Dashboard;

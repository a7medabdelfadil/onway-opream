"use client";

import React from "react";
import Box from "~/_components/Box";
import BoxGrid from "~/_components/BoxGrid";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";

function Dashboard() {
  return (
    <Container>
      <Text font={"semiBold"} size={"2xl"} className="mb-4">
        Dashboard
      </Text>
      <BoxGrid columns={4} mdColumns={2} gap={1}>
        <Box className="p-8">
          <Text color={"gray"}>Total Users</Text>
          <div className="flex items-center justify-between">
            <Text font={"semiBold"} size={"2xl"}>
              250
            </Text>
            <Text className="w-fit rounded-full bg-limeGreen/10 px-3 py-1 text-limeGreen">
              +3.4%
            </Text>
          </div>
        </Box>
        <Box className="p-8">
          <Text color={"gray"}>Total Guest</Text>
          <div className="flex items-center justify-between">
            <Text font={"semiBold"} size={"2xl"}>
              63
            </Text>
            <Text className="w-fit rounded-full bg-limeGreen/10 px-3 py-1 text-limeGreen">
              +3.4%
            </Text>
          </div>
        </Box>
        <Box className="p-8">
          <Text color={"gray"}>Total Income</Text>
          <div className="flex items-center justify-between">
            <Text font={"semiBold"} size={"2xl"}>
              $52.6k
            </Text>
            <Text className="w-fit rounded-full bg-limeGreen/10 px-3 py-1 text-limeGreen">
              +3.4%
            </Text>
          </div>
        </Box>
        <Box className="p-8">
          <Text color={"gray"}>New Booking</Text>
          <div className="flex items-center justify-between">
            <Text font={"semiBold"} size={"2xl"}>
              21
            </Text>
            <Text className="w-fit rounded-full bg-error/10 px-3 py-1 text-error">
              -3.4%
            </Text>
          </div>
        </Box>
      </BoxGrid>
      <div className="mt-4 flex gap-4">
        <Box className="h-96 w-3/5">
        Income
        </Box>
        <Box className="h-96 w-2/5">
        New Booking
        </Box>
      </div>
      <Box className="mt-4 h-96">
        <Text font={"semiBold"} size={"2xl"} className="mb-4">
        Last registration request
        </Text>
      </Box>
    </Container>
  );
}

export default Dashboard;

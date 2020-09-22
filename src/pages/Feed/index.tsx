import React from "react";
import LeftSide from "../../components/LeftSide";
import MenuFeed from "../../components/MenuFeed";
import RightSide from "../../components/RightSide";
import Timeline from "../../components/Timeline";
import { Wrapper } from "./styles";
import { Content } from "./styles";

function Feed() {
  return (
    <Wrapper>
      <MenuFeed />
      <Content>
        <LeftSide />
        <Timeline />
        <RightSide />
      </Content>
    </Wrapper>
  );
}

export default Feed;

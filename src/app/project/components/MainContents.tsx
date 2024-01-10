import { flexColumn } from "@/components/Flex/flexStyle";

import React from "react";
import styled from "styled-components";
import SectionProgressProjects from "./Section/SectionProgressProjects";
import SectionMemberRecomm from "./Section/SectionMemberRecomm";
import SectionAllProjects from "./Section/SectionAllProjects";
import { User } from "../types/User";
import FloatingBtn from "./FloatingBtn";

export const MainContents: React.FC<{ user: User }> = ({ user }) => {
  return (
    <MainConainer>
      <SectionProgressProjects user={user} />
      <SectionMemberRecomm user={user} />
      <SectionAllProjects />
      <FloatingBtn title={"새 프로젝트 업로드"} />
    </MainConainer>
  );
};
export default MainContents;

const MainConainer = styled.div`
  flex: 3;
  ${flexColumn}
  gap : 5rem;
  max-width: 790px;
`;
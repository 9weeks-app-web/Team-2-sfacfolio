import type { Metadata } from "next";
import "../styles/globals.css";
import { RecoilRootWrapper } from "./RecoilRootWrapper";
import RootContainer from "@/components/RootContainer";
import ClientComponentContainer from "./ClientComponentContainer";
import { NavTabs } from "@/components/Nav/NavTabs";
import { Navigation } from "@/components/Nav/Navigation";
import Providers from "./auth/components/Providers";

// 메타데이터
export const metadata: Metadata = {
  title: "스펙폴리오",
  description: "2팀 스펙폴리오 개발",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RecoilRootWrapper>
          <ClientComponentContainer>
            <RootContainer>
              <Providers>
                <div id="modal" />
                <div id="backdrop" />
                <NavTabs />
                <Navigation />
                {children}
              </Providers>
            </RootContainer>
          </ClientComponentContainer>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}

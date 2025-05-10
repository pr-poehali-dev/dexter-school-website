
import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MissionSection from "./MissionSection";
import TeamSection from "./TeamSection";
import HistorySection from "./HistorySection";

interface TabData {
  value: string;
  label: string;
  content: ReactNode;
}

const TabsContainer = () => {
  const tabs: TabData[] = [
    {
      value: "mission",
      label: "Миссия",
      content: <MissionSection />
    },
    {
      value: "team",
      label: "Команда",
      content: <TeamSection />
    },
    {
      value: "history",
      label: "История",
      content: <HistorySection />
    }
  ];

  return (
    <Tabs defaultValue="mission">
      <TabsList className="mb-8 w-full grid grid-cols-3">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsContainer;

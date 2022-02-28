import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Tabsbtn = () => {
  return (
    <>
      <div data-aos="fade-up">
        <Tabs id="Tabs">
          <TabList id="tabs__list">
            <Tab>All</Tab>
            <Tab>Website</Tab>
            <Tab>Mobile App</Tab>
            <Tab>Design</Tab>
            <Tab>Support</Tab>
          </TabList>
          {/* <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel> */}
        </Tabs>
      </div>
    </>
  );
};
export default Tabsbtn;

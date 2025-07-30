import React from "react";
import Card from "../ui/Card";
import Box from "../ui/Box";
import Heading from "../ui/Heading";

const CloudSoftware = () => {
  return (
    <div className="container mx-auto py-16">
      <Heading
        title="All-In-One "
        highlightedText="Cloud Software."
        description="Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office."
        className="w-[40%]"
      />
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-32">
        <Card
          icon={"/images/docIcon.png"}
          title="Online Billing, Invoicing, & Contracts"
          description="Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts"
        />
        <Card
          icon={"/images/calenderIcon.png"}
          title="Easy Scheduling & Attendance Tracking"
          description="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
        />
        <Card
          icon={"/images/groupIcon.png"}
          title="Customer Tracking"
          description="Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization"
        />
      </Box>
    </div>
  );
};

export default CloudSoftware;

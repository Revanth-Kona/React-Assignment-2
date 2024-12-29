import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DynamicAccordion = () => {
  // Sample data for the accordion
  const accordionData = [
    {
      id: 1,
      title: "Accordion 1",
      content: "This is the content of Accordion 1.",
    },
    {
      id: 2,
      title: "Accordion 2",
      content: "This is the content of Accordion 2.",
    },
    {
      id: 3,
      title: "Accordion 3",
      content: "This is the content of Accordion 3.",
    },
  ];

  // State to manage which accordion is expanded
  const [expanded, setExpanded] = useState(false);

  // Handle accordion expansion
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
    <h1>Dynamic Accordig</h1>
      {accordionData.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
          >
            <Typography variant="h6">{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default DynamicAccordion;
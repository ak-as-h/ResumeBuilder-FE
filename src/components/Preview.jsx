import React from "react";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { FaFileDownload } from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Preview = ({ resumeData }) => {
  const onDownloadClick = async () => {
    let resultEl = document.getElementById(
      resumeData.id ? resumeData.id : "el",
    );

    let canvas = await html2canvas(resultEl);

    let imgData = canvas.toDataURL("image/png");
    console.log(imgData);

    let pdf = new jsPDF("p", "mm", "a4");

    let pdfWidth = pdf.internal.pageSize.getWidth();

    let pdfHeight = (canvas.height*pdfWidth)/canvas.width;

    pdf.addImage(imgData,'pdf',0,0,pdfWidth,pdfHeight)
    pdf.save('resume.pdf')
  };

  return (
    <Box sx={{ pl: 4 }}>
      <Button onClick={onDownloadClick} sx={{ color: "#795037" }}>
        <FaFileDownload style={{ fontSize: "19px", fontWeight: 400 }} />{" "}
        Download CV
      </Button>
      <Paper
        id={resumeData.id ? resumeData.id : "el"}
        sx={{ p: 3 }}
        elevation={3}
      >
        <Typography variant="h4">{resumeData?.fullName}</Typography>
        <Typography sx={{ my: 1 }}>
          Phone:{resumeData?.contactNumber}
        </Typography>
        <Typography sx={{ my: 1 }}>Email:{resumeData?.email}</Typography>
        <Typography sx={{ my: 1 }}>Linkedin:{resumeData?.linkedin}</Typography>
        <Typography sx={{ my: 1 }}>Github:{resumeData?.github}</Typography>
        <Typography sx={{ my: 1 }}>Location:{resumeData?.location}</Typography>
        <Divider />
        <Typography sx={{ my: 1 }} variant="h5">
          Professional Summary
        </Typography>
        <Typography variant="p">{resumeData?.summary}</Typography>
        <Divider />
        <Typography sx={{ my: 1 }} variant="h5">
          Technical Skills
        </Typography>
        {resumeData?.skills?.map((eachSkill, index) => (
          <Button key={index}>{eachSkill}</Button>
        ))}
        <Divider />
        <Typography sx={{ my: 1 }} variant="h5">
          Education
        </Typography>
        <Typography sx={{ my: 1 }}>
          Bachelor’s Degree in {resumeData?.degree}
        </Typography>
        <Typography sx={{ my: 1 }}>
          University/College Name :{resumeData?.university}
        </Typography>
        <Typography sx={{ my: 1 }}>
          Year of Graduation :{resumeData?.yog}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Preview;

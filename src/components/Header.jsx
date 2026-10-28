import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logoImg from "../assets/businessman.png";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { Stack } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1  }}>
      <AppBar sx={{ backgroundColor: "orange",height:'70px'  }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,paddingTop:'1px' }}
          >
            <img style={{ width: "70px" }} src={logoImg} alt="LogoImage" />
          </IconButton>
          <Typography  variant="h4" component={Link} to={"/"} sx={{ flexGrow: 1,textDecoration: "none", color: "white"  }}>
            Resume Builder
          </Typography>
          <Stack direction={"row"} sx={{ gap: 6 }}>
            <Typography
              sx={{ textDecoration: "none", color: "white" }}
              variant="h6"
              component={Link}
              to={"/all-resumes"}
            >
              All Resumes
            </Typography>
            <Typography
              sx={{ textDecoration: "none", color: "white" }}
              variant="h6"
              component={Link}
              to={"/all-downloads"}
            >
              All Downloads
            </Typography>
            <Tooltip sx={{textDecoration:'none',color:'white'}}
              title="An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF."
              placement="bottom-start"
            >
              <Button sx={{fontSize:'15px',color:'white'}}>ABOUT US</Button>
            </Tooltip>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  Dialog,
  DialogContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PetsIcon from "@mui/icons-material/Pets";

const menuItems = [
  { label: "View Resume", type: "resume" },
  { label: "Work", target: "mainSection", type: "scroll" },
  { label: "About", target: "aboutSection", type: "scroll" },
];

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openResume, setOpenResume] = useState(false); // 🔑 state untuk modal
  const theme = useTheme();

  const handleMenuClick = (item: any) => {
    if (item.type === "scroll" && item.target) {
      const section = document.getElementById(item.target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    if (item.type === "resume") {
      setOpenResume(true);
    }
    setOpenDrawer(false);
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: theme.custom.colors.secondary.Isabelline,
          boxShadow: "none",
          overflow: "hidden",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2em",
            width: "100%",
            maxWidth: "71.375rem",
            mx: "auto",
          }}
        >
          {/* Logo */}
          <PetsIcon
            sx={{
              color: theme.custom.colors.neutral.Chinese_Black,
              fontSize: 32,
            }}
          />

          {/* Menu Desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
            }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item.label}
                variant="workSemi20"
                sx={{
                  cursor: "pointer",
                  color: theme.custom.colors.neutral.Chinese_Black,
                  "&:hover": { textDecoration: "underline" },
                }}
                onClick={() => handleMenuClick(item)}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* Hamburger */}
          <IconButton
            edge="end"
            sx={{
              display: { xs: "flex", md: "none" },
              ml: "auto",
              color: theme.custom.colors.neutral.Chinese_Black,
            }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer Mobile */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <IconButton onClick={() => setOpenDrawer(false)} sx={{ mb: 2 }}>
            <CloseIcon />
          </IconButton>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton onClick={() => handleMenuClick(item)}>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontWeight: 500 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* 🔑 Modal Resume Preview */}
      <Dialog
        open={openResume}
        onClose={() => setOpenResume(false)}
        maxWidth="lg"
        fullWidth
      >
        <DialogContent sx={{ height: "80vh", p: 0 }}>
          <iframe
            src="/pdf/Resume.pdf"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

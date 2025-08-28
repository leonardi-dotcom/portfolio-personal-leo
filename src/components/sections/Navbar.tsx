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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PetsIcon from "@mui/icons-material/Pets";

const menuItems = ["Home", "Work", "Testimonials", "About"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: theme.custom.colors.secondary.Isabelline,
          boxShadow: "none",
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
                key={item}
                variant="workSemi20"
                color={theme.custom.colors.neutral.Chinese_Black}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* Hamburger (Mobile Only, Always Right) */}
          <IconButton
            edge="end"
            sx={{
              display: { xs: "flex", md: "none" }, // hanya muncul di mobile
              ml: "auto", // dorong ke kanan
              color: theme.custom.colors.neutral.Chinese_Black,
            }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer Menu Mobile */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <IconButton onClick={() => setOpen(false)} sx={{ mb: 2 }}>
            <CloseIcon />
          </IconButton>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton onClick={() => setOpen(false)}>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{ fontWeight: 500 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

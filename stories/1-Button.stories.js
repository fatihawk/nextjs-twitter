import React from "react";

import Button from "../components/button";
import NavButton from "../components/nav-button";
import Navigation from "../components/navigation";
import ThemeButton from "../components/theme-button";
import Stack from '../components/stack'


export default {
  title: "Buttons",
};

export const Normal = () => <Button>Save</Button>;

export const Theme = () => (
  <Stack column gap={20}>
    <ThemeButton>Save</ThemeButton>
    <ThemeButton full>SaveFull</ThemeButton>
    <ThemeButton full big>SaveFull</ThemeButton>
  </Stack>
);

export const Navigation1 = () => <NavButton>Save</NavButton>;

export const Nav = () => <Navigation selectedKey="home" />;

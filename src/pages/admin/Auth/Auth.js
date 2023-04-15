import React, { useState } from "react";
import { Tab } from "semantic-ui-react";
import { image } from "../../../assets";
import { LoginForm, RegisterForm } from "../../../components/admin/Auth";
import "./Auth.scss";

export function Auth() {
  const [activeIndex, setActiveIndex] = useState(0);

  const openLogin = () => setActiveIndex(0);

  const panes = [
    {
      menuItem: "Ingresar",
      render: () => (
        <Tab.Pane>
          <LoginForm />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Nuevo Usuario",
      render: () => (
        <Tab.Pane>
          <RegisterForm openLogin={openLogin} />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div className="auth">
      <img src={image.logoIglesia} alt="Logo" className="logo" />
      <Tab
        panes={panes}
        className="auth__form"
        activeIndex={activeIndex}
        onTabChange={(_, data) => setActiveIndex(data.activeIndex)}
      />
    </div>
  );
}

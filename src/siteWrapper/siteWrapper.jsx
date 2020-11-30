import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Site, RouterContextProvider } from "tabler-react";

const navBarItems = [
  {
    value: "Home",
    to: "/",
    icon: "home",
    LinkComponent: withRouter(NavLink),
    useExact: true,
  },
  {
    value: "Servers",
    to: "/servers",
    icon: "globe",
    LinkComponent: withRouter(NavLink),
  },
  {
    value: "Users",
    to: "/users",
    icon: "user",
    LinkComponent: withRouter(NavLink),
  },
  {
    value: "Transaction",
    to: "/transaction",
    icon: "arrow-right-circle",
    LinkComponent: withRouter(NavLink),
  },
  {
    value: "Setting",
    to: "/setting",
    icon: "settings",
    LinkComponent: withRouter(NavLink),
    // subItems: [
    //   {
    //     value: "Cards Design",
    //     to: "/cards",
    //     LinkComponent: withRouter(NavLink),
    //   },
    //   { value: "Charts", to: "/charts", LinkComponent: withRouter(NavLink) },
    //   {
    //     value: "Pricing Cards",
    //     to: "/pricing-cards",
    //     LinkComponent: withRouter(NavLink),
    //   },
    // ],
  },
];

const accountDropdownProps = {
  avatarURL: "./demo/faces/female/25.jpg",
  name: "Jane Pearson",
  description: "Administrator",
  options: [
    { icon: "user", value: "Profile" },
    { icon: "settings", value: "Settings" },
    { icon: "mail", value: "Inbox", badge: "6" },
    { icon: "send", value: "Message" },
    { isDivider: true },
    { icon: "help-circle", value: "Need help?" },
    { icon: "log-out", value: "Sign out" },
  ],
};

class SiteWrapper extends Component {
  state = {
    notificationsObjects: [
      {
        unread: true,
        avatarURL: "demo/faces/male/41.jpg",
        message: (
          <React.Fragment>
            <strong>Nathan</strong> pushed new commit: Fix page load performance
            issue.
          </React.Fragment>
        ),
        time: "10 minutes ago",
      },
      {
        unread: true,
        avatarURL: "demo/faces/female/1.jpg",
        message: (
          <React.Fragment>
            <strong>Alice</strong> started new task: Tabler UI design.
          </React.Fragment>
        ),
        time: "1 hour ago",
      },
      {
        unread: false,
        avatarURL: "demo/faces/female/18.jpg",
        message: (
          <React.Fragment>
            <strong>Rose</strong> deployed new version of NodeJS REST Api // V3
          </React.Fragment>
        ),
        time: "2 hours ago",
      },
    ],
  };

  render() {
    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "Host",
          imageURL: "./demo/brand/tabler.svg",

          accountDropdown: accountDropdownProps,
        }}
        navProps={{ itemsObjects: navBarItems }}
        routerContextComponentType={withRouter(RouterContextProvider)}
        // footerProps={{
        //   links: [
        //     <a href="#">First Link</a>,
        //     <a href="#">Second Link</a>,
        //     <a href="#">Third Link</a>,
        //     <a href="#">Fourth Link</a>,
        //     <a href="#">Five Link</a>,
        //     <a href="#">Sixth Link</a>,
        //     <a href="#">Seventh Link</a>,
        //     <a href="#">Eigth Link</a>,
        //   ],
        //   note:
        //     "Premium and Open Source dashboard template with responsive and high quality UI. For Free!",
        // }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;

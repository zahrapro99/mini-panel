import React from "react";
import { Page, Grid, StampCard } from "tabler-react";
import SiteWrapper from "../../siteWrapper/siteWrapper";

function HomePage() {
  return (
    <SiteWrapper>
      <Page.Content title="Home">
        <Grid.Row>
          <Grid.Col sm={6} lg={3}>
            <StampCard
              color="green"
              icon="globe"
              header={
                <a href="servers">
                  <small>Servers</small>
                </a>
              }
            />
          </Grid.Col>
          <Grid.Col sm={6} lg={3}>
            <StampCard
              color="yellow"
              icon="user"
              header={
                <a href="users">
                  <small>Users</small>
                </a>
              }
            />
          </Grid.Col>
          <Grid.Col sm={6} lg={3}>
            <StampCard
              color="blue"
              icon="arrow-right-circle"
              header={
                <a href="transaction">
                  <small>Transaction</small>
                </a>
              }
            />
          </Grid.Col>
          <Grid.Col sm={6} lg={3}>
            <StampCard
              color="red"
              icon="settings"
              header={
                <a href="setting">
                  <small>Setting</small>
                </a>
              }
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default HomePage;

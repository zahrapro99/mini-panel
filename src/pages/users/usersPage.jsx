import React from "react";
import SiteWrapper from "../../siteWrapper/siteWrapper";
import { Page, Grid, Table, Avatar, Text, Card, Dropdown } from "tabler-react";

function UsersPage() {
  return (
    <SiteWrapper>
      <Page.Content title="Users">
        <Grid.Row cards deck>
          <Grid.Col width={12}>
            <Card>
              <Card.Header>
                <Card.Title>Users</Card.Title>
              </Card.Header>
              <Table
                responsive
                highlightRowOnHover
                hasOutline
                verticalAlign="center"
                cards
                className="card-table table-vcenter text-nowrap"
                headerItems={[
                  { content: "", className: "w-1" },
                  { content: "SOURCS" },
                  { content: "DESTINATION" },
                  { content: "SSL" },
                  { content: "ACCESS" },
                  { content: "STATUS" },
                  { content: null },
                  { content: null },
                ]}
                bodyItems={[
                  {
                    key: "1",
                    item: [
                      {
                        alignContent: "center",
                        content: (
                          <Avatar
                            imageURL="demo/faces/female/26.jpg"
                            className="d-block"
                            status="green"
                          />
                        ),
                      },
                      {
                        content: (
                          <React.Fragment>
                            Elizabeth Martin
                            <Text size="sm" muted>
                              Created: Mar 19, 2018
                            </Text>
                          </React.Fragment>
                        ),
                      },
                      { content: "http://localhost3000" },
                      { content: "Let's Encrypt" },
                      { content: "Public" },
                      {
                        content: (
                          <React.Fragment>
                            <span className="status-icon bg-success" /> Online
                          </React.Fragment>
                        ),
                      },

                      {
                        alignContent: "center",
                        content: (
                          <Dropdown
                            trigger={
                              <Dropdown.Trigger
                                icon="more-vertical"
                                toggle={false}
                              />
                            }
                            position="right"
                            items={
                              <React.Fragment>
                                <Dropdown.Item icon="tag">
                                  Action{" "}
                                </Dropdown.Item>
                                <Dropdown.Item icon="edit-2">
                                  Another action{" "}
                                </Dropdown.Item>
                                <Dropdown.Item icon="message-square">
                                  Something else here
                                </Dropdown.Item>
                                <Dropdown.ItemDivider />
                                <Dropdown.Item icon="link">
                                  Separated link
                                </Dropdown.Item>
                              </React.Fragment>
                            }
                          />
                        ),
                      },
                    ],
                  },
                  {
                    key: "2",
                    item: [
                      {
                        alignContent: "center",
                        content: (
                          <Avatar
                            imageURL="demo/faces/female/26.jpg"
                            className="d-block"
                            status="green"
                          />
                        ),
                      },
                      {
                        content: (
                          <React.Fragment>
                            Elizabeth Martin
                            <Text size="sm" muted>
                              Created: Mar 19, 2018
                            </Text>
                          </React.Fragment>
                        ),
                      },
                      { content: "http://api:3000" },
                      { content: "Let's Encrypt" },
                      { content: "Public" },
                      {
                        content: (
                          <React.Fragment>
                            <span className="status-icon bg-success" /> Online
                          </React.Fragment>
                        ),
                      },

                      {
                        alignContent: "center",
                        content: (
                          <Dropdown
                            trigger={
                              <Dropdown.Trigger
                                icon="more-vertical"
                                toggle={false}
                              />
                            }
                            position="right"
                            items={
                              <React.Fragment>
                                <Dropdown.Item icon="tag">
                                  Action{" "}
                                </Dropdown.Item>
                                <Dropdown.Item icon="edit-2">
                                  Another action{" "}
                                </Dropdown.Item>
                                <Dropdown.Item icon="message-square">
                                  Something else here
                                </Dropdown.Item>
                                <Dropdown.ItemDivider />
                                <Dropdown.Item icon="link">
                                  Separated link
                                </Dropdown.Item>
                              </React.Fragment>
                            }
                          />
                        ),
                      },
                    ],
                  },
                ]}
              ></Table>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default UsersPage;

import React from "react";
import {
  Page,
  Avatar,
  Grid,
  Card,
  Text,
  Table,
  Dropdown,
  Form,
  Tab,
  Tabs,
  Button,
} from "tabler-react";
import SiteWrapper from "../../siteWrapper/siteWrapper";

function ServersPage() {
  return (
    <SiteWrapper>
      <Page.Content title="Servers">
        <Grid.Row cards deck>
          <Grid.Col width={12}>
            <Card>
              <Card.Header>
                <Card.Title>Servers</Card.Title>
                <Card.Options>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Add Server
                  </button>

                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            New Server
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                          </button>
                        </div>
                        <div className="modal-body">
                          <Tabs initialTab="Log In">
                            <Tab title="Log In">
                              {/* Form */}
                              <div>
                                <Form
                                  onSubmit={(event) =>
                                    console.log(event.target.name + "clicked")
                                  }
                                >
                                  <Grid.Row>
                                    <Grid.Col width={6}>
                                      <Form.Input
                                        name="hostName"
                                        label="Host Name"
                                      />
                                    </Grid.Col>
                                    <Grid.Col width={6}>
                                      <Form.Input
                                        name="password"
                                        label="Password"
                                        type="password"
                                      />
                                    </Grid.Col>
                                  </Grid.Row>
                                  <Form.Switch
                                    type="checkbox"
                                    name="toggle"
                                    value="cache"
                                    label="Setup now"
                                  />

                                  <Form.Group
                                    label={
                                      <Form.Label aside="56/100">
                                        Certificate
                                      </Form.Label>
                                    }
                                  >
                                    <Form.Textarea
                                      defaultValue=""
                                      name="example-textarea"
                                      placeholder="Content.."
                                      rows={6}
                                    />
                                  </Form.Group>
                                  <Grid.Row>
                                    <Form.Switch
                                      name="toggle"
                                      value="cache"
                                      label="Fast test"
                                    />
                                    <Form.Switch
                                      name="toggle"
                                      value="cache"
                                      label="Premium"
                                    />
                                  </Grid.Row>
                                </Form>
                              </div>
                            </Tab>
                            <Tab title="IP">
                              <Grid.Row alignItems="center">
                                <Grid.Col width={10}>
                                  <Form.Input
                                    name="ipName"
                                    label="IP Name"
                                    // onChange=""
                                    // value=""
                                  />
                                </Grid.Col>
                                <Grid.Col>
                                  <Button onSubmit="">✚</Button>
                                </Grid.Col>
                              </Grid.Row>
                            </Tab>
                          </Tabs>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Modal */}
                </Card.Options>
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

export default ServersPage;

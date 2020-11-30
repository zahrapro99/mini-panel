import React from "react";
import SiteWrapper from "../../siteWrapper/siteWrapper";
import { Page, Button } from "tabler-react";

function SettingPage() {
  return (
    <SiteWrapper>
      <Page.Content title="Setting">
        <Button outline color="secondary">
          Setting
        </Button>
      </Page.Content>
    </SiteWrapper>
  );
}

export default SettingPage;

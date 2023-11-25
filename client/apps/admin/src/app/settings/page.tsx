import React from "react";

import CategorySettings from "components/settings/category";
import TagSettings from "components/settings/tag";

const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl">SettingsPage</h1>
      <CategorySettings />
      <TagSettings />
    </div>
  );
};

export default SettingsPage;

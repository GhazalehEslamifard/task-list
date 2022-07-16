import { memo } from "react";

function ErrorPageComponent(): React.ReactElement {
  return <div>This page is not available.</div>;
}

export const ErrorPage = memo(ErrorPageComponent);

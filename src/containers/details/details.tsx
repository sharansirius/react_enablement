import React from "react";
import { Card, BlogDetails } from "../../components";

function Details() {
  console.log("--- Container --- Details init");
  return (
    <Card width="50">
      <BlogDetails />
    </Card>
  );
}

export default React.memo(Details);

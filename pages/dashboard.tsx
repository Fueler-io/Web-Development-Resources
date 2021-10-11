import * as React from "react";
import Layout from "../components/layout";

export default function Dashboard  () {
  return (
    <div>jdbsdsb</div>
  )
}


Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
     {page}
    </Layout>
  )
}

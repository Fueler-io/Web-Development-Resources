import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { fetchResources } from "../../hooks/fetchResources";


export default function DashboardWithFilter() {
  return (
    <div>
      <ul
        role="list"
        className={ "grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 overflow-y-auto lg:px-3"
        }
      ><li>dkndfkf</li></ul>
    </div>
  );
}

DashboardWithFilter.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};


export async function getStaticProps() {
  let selectedChar = "ert";
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['resources', selectedChar], () => fetchResources(selectedChar));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
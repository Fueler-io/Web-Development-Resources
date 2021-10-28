import * as React from "react";
import Layout from "../../components/layout";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { fetchAllResources } from "../../hooks/fetchAllResources";
import ResourceCard from "../../components/cards/ResourceCard";


export default function Dashboard() {
  const {data} = useQuery('all-resources', fetchAllResources);
  return (
    <div>
      <ul
        role="list"
        className={
          "grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 overflow-y-auto py-4"
        }
      >
        {data && data.data && data.data.map(item => (
          <ResourceCard key={item.name} item={item} />
        ))}
      </ul>
    </div>
  );
}

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};


export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('all-resources', fetchAllResources);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
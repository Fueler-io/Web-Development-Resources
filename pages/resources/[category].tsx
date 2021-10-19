import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import Layout from "../../components/layout";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { fetchResources } from "../../hooks/fetchResources";
import { sidebarLinks } from "../../utils/nav-menu";
import ResourceCard from "../../components/cards/ResourceCard";

export default function DashboardWithFilter() {
  const router = useRouter();
  const { data, isLoading, error } = useQuery(
    ["resources", router.query.category],
    fetchResources
  );

  return (
    <div>
      <ul
        role="list"
        className={
          "grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 overflow-y-auto"
        }
      >
        {data && data.data && data.data.map(item => (
          <ResourceCard key={item.name} item={item} />
        ))}
      </ul>
    </div>
  );
}

DashboardWithFilter.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// This function gets called at build time
export async function getStaticPaths() {
  const paths = sidebarLinks.map((link) => ({
    params: { category: link.name },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

// This function gets called at build time
export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ["resources", context.params && context.params.category],
    fetchResources
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

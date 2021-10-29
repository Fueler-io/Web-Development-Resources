import * as React from "react";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../public/images/three-dot-loader.svg"
import Layout from "../../components/layout";
import { supabase } from "../../utils/supabase";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { Resource } from "../../hooks/types";
import { fetchResources } from "../../hooks/fetchResources";
import { sidebarLinks } from "../../utils/nav-menu";
import ResourceCard from "../../components/cards/ResourceCard";

export default function DashboardWithFilter() {
  const router = useRouter();
  const {data, isLoading} = useQuery(["resources", router.query.category], fetchResources)
  const [deet, setDeets] = React.useState<Resource[] | null | undefined>(data?.data);
  const [hasMore, setHasMore] = React.useState(true);

  const getResourceslength = () => {
    if (deet) {
      return deet.length
    }
    return 0;
  }

  const getMoreResources = async () => {
    const { data, error } = await supabase
      .from<Resource>("resources")
      .select(`*`)
      .filter("tag", "eq", router.query.category)
      .limit(getResourceslength() + 5)
    return { data, error };
  };

  
  return (
    <div>
      <InfiniteScroll
        dataLength={getResourceslength()}
        next={getMoreResources}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        <div>
      {
        isLoading || !data ?
        <div className="text-center py-14">
          <Image src={Loader} />
        </div>
         : <ul
         role="list"
         className={
           "grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 overflow-y-auto py-4"
         }
       >
         {data && data.data && data.data.map(item => (
           <ResourceCard key={item.name} item={item} />
         ))}
       </ul>
      }
    </div>
      </InfiniteScroll>
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

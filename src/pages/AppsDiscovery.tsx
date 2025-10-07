import { useGetAppRowsQuery } from "../store/appRowsApi";
import SideMenuWrapper from "../components/SideMenuWrapper";
import AppsList from "../components/AppsList";

const AppsDiscovery: React.FC = () => {
  const { data, error, isLoading } = useGetAppRowsQuery({});

  return (
    <SideMenuWrapper>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred</p>
      ) : (
        <AppsList appRows={data} total={data?.total} />
      )}
    </SideMenuWrapper>
  );
};

export default AppsDiscovery;

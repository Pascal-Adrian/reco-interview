import { useGetAppRowsQuery } from "../store/appRowsApi";

const AppsDiscovery = () => {
  const { data, error, isLoading } = useGetAppRowsQuery({
    pageNumber: 1,
    pageSize: 25,
  });

  return (
    <div>
      <h1>Apps Discovery</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred</p>
      ) : (
        <ul>
          {data?.appRows.map((row) => (
            <li key={row.appId}>
              {row.appName} - {row.category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppsDiscovery;

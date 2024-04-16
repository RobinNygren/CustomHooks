import useFetch from "../../hooks/useFetch";

const ApiFetcher = ({ url }: { url: string }) => {
  const { data, loading, error } = useFetch(url);

  if (data) {
    console.log("Fetched Data:", data);
  }

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return null;
};
export default ApiFetcher;

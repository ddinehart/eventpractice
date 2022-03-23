import { useRouter } from "next/router";

function FilteredEventsPage() {
  const router = useRouter();

  console.log(router.query);
  return <div>Filtered events page</div>;
}

export default FilteredEventsPage;

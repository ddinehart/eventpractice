import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import { Fragment } from "react/cjs/react.production.min";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <Fragment>
      <EventList items={featuredEvents} />
    </Fragment>
  );
}

export default HomePage;

import Image from "next/image";
import Link from "next/link";
import Carousel from "components/Carousel";
import ProjectLayout from "components/ProjectLayout";
import {
  Callout,
  Divider,
  Figure,
  Highlight,
  ListItem,
  Meter,
  OrderedList,
  Section,
  SubSection,
} from "components/Content";

import calendar from "public/projects/pingboard-mobile/calendar.png";
import calendarEdit from "public/projects/pingboard-mobile/calendarEdit.png";
import calendarFilter from "public/projects/pingboard-mobile/calendarFilter.png";
import calendarFiltering from "public/projects/pingboard-mobile/calendarFiltering.png";
import directoryAbout from "public/projects/pingboard-mobile/directoryAbout.png";
import directoryHome from "public/projects/pingboard-mobile/directoryHome.png";
import directoryList from "public/projects/pingboard-mobile/directoryList.png";
import directoryPeople from "public/projects/pingboard-mobile/directoryPeople.png";
import directoryQuickLook from "public/projects/pingboard-mobile/directoryQuickLook.png";
import directoryOrgChart from "public/projects/pingboard-mobile/directoryOrgChart.png";
import meetingsAgendaEmpty from "public/projects/pingboard-mobile/meetingsAgendaEmpty.png";
import meetingsGestures from "public/projects/pingboard-mobile/meetingsGestures.png";
import meetingsIndex from "public/projects/pingboard-mobile/meetingsIndex.png";
import meetingsNewTopic from "public/projects/pingboard-mobile/meetingsNewTopic.png";
import meetingsNextTime from "public/projects/pingboard-mobile/meetingsNextTime.png";
import meetingsTopics from "public/projects/pingboard-mobile/meetingsTopics.png";
import meetingsUpdates from "public/projects/pingboard-mobile/meetingsUpdates.png";
import profileConnections from "public/projects/pingboard-mobile/profileConnections.png";
import profileEdit from "public/projects/pingboard-mobile/profileEdit.png";
import profileView from "public/projects/pingboard-mobile/profileView.png";
import welcome from "public/projects/pingboard-mobile/welcome.png";
import whosWhoGuess from "public/projects/pingboard-mobile/whosWhoGuess.png";
import whosWhoQuestion from "public/projects/pingboard-mobile/whosWhoQuestion.png";
import whosWhoScoreboard from "public/projects/pingboard-mobile/whosWhoScoreboard.png";
import whosWhoStart from "public/projects/pingboard-mobile/whosWhoStart.png";

const DIRECTORY_IMAGES = [
  {
    src: directoryHome,
    alt: "home screen",
  },
  {
    src: directoryOrgChart,
    alt: "mobile org chart",
  },
  {
    src: directoryList,
    alt: "location index screen",
  },
  {
    src: directoryPeople,
    alt: "location screen",
  },
  {
    src: directoryAbout,
    alt: "location details screen",
  },
];

const PROFILE_IMAGES = [
  {
    src: profileView,
    alt: "view profile",
  },
  {
    src: profileConnections,
    alt: "view your connections",
  },
  {
    src: profileEdit,
    alt: "edit profile",
  },
];

const CALENDAR_IMAGES = [
  {
    src: calendar,
    alt: "calendar screen",
  },
  {
    src: calendarFilter,
    alt: "calendar filter screen",
  },
  {
    src: calendarFiltering,
    alt: "calendar filtering screen",
  },
  {
    src: calendarEdit,
    alt: "edit status screen",
  },
];

const MEETINGS_IMAGES = [
  {
    src: meetingsTopics,
    alt: "meeting topics",
  },
  {
    src: meetingsNextTime,
    alt: "Meetings follow-up items",
  },
  {
    src: meetingsUpdates,
    alt: "Meeting updates",
  },
  {
    src: meetingsGestures,
    alt: "topic gestures",
  },
  {
    src: meetingsNewTopic,
    alt: "add a new topic",
  },
];

const WHOS_WHO_IMAGES = [
  {
    src: whosWhoStart,
    alt: "Who's Who screen",
  },
  {
    src: whosWhoScoreboard,
    alt: "Who's Who scoreboard screen",
  },
  {
    src: whosWhoQuestion,
    alt: "Who's Who question",
  },
  {
    src: whosWhoGuess,
    alt: "Who's Who guess",
  },
];

// line up all images on top of each other
// show arrow buttons on either side of image.
// set state to first image visible?

const PingboardMobile = ({ metaTitle }) => {
  return (
    <ProjectLayout
      title={metaTitle}
      description="The challenge: condense Pingboard's suite of tools to a useful, unfussy mobile app. Thanks to React Native, we could maintain a single code base across Android and Mobile."
    >
      <Section title="Directory" columns>
        <Carousel className="max-w-320" images={DIRECTORY_IMAGES} transition />
      </Section>

      <Section title="Profile" columns>
        <Carousel className="max-w-320" images={PROFILE_IMAGES} />
      </Section>

      <Section title="Calendar" columns>
        <Carousel className="max-w-320" images={CALENDAR_IMAGES} />
      </Section>

      <Section title="Who's Who" columns>
        <Carousel className="max-w-320" images={WHOS_WHO_IMAGES} />
      </Section>

      <Section title="1:1 Meetings" columns>
        <Carousel className="max-w-320" images={MEETINGS_IMAGES} />
      </Section>
    </ProjectLayout>
  );
};

export default PingboardMobile;

export async function getStaticProps(context) {
  return {
    props: {
      metaTitle: "Pingboard Mobile App",
    },
  };
}

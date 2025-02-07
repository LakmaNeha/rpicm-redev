import CourseCardTile from "@/components/courseCardTile/CourseCardTile";

const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9); // Generate a random unique ID
};

const coursesData = [
  {
    courseType: "COMMUNICATION",
    courseItems: [
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        showArrow: true,
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        showArrow: false,
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        showArrow: false,
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        showArrow: false,
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
        showArrow: false,
      },
    ],
  },
  {
    courseType: "COMMUNICATION",
    courseItems: [
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
    ],
  },
  {
    courseType: "COMMUNICATION",
    courseItems: [
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
      {
        title: "Course 1",
        id: `comm_${generateUniqueId()}`,
        description: "Description for course 1",
      },
    ],
  },
];

const CoursesPage = () => {
  return (
    <div>
      <h1>My Courses</h1>
      <CourseCardTile courseConfigs={coursesData} />
    </div>
  );
};

export default CoursesPage;

import { FC } from "react";

import CourseCardTile from "@/components/courseCardTile/CourseCardTile";
import NavigationBar from "@/components/navigationBar/NavigationBar";
import styles from "./CoursesPage.module.scss";

import { CourseConfig } from "@/types/courses.types";

interface CoursesPageProps {
  coursesData: CourseConfig[];
}

const CoursesPage: FC<CoursesPageProps> = ({ coursesData }) => {
  return (
    <>
      <NavigationBar isOnLandingPage={false} />
      <div className={styles.coursesPage}>
        <div className={styles.coursesPageTitle}>Courses</div>
        <CourseCardTile courseConfigs={coursesData} />
      </div>
    </>
  );
};
export default CoursesPage;

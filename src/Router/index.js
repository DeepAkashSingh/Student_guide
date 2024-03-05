import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "@/components/Layouts/AboutUs.vue";
// import AboutUs from "@/components/Layouts/AboutUs.vue";
import AddCourse from "@/components/InstituteLayouts/AddCourse.vue";
import AdminChangePassword from "@/components/AdminLayouts/AdminChangePassword.vue";
import AdminChatBot from "@/components/AdminLayouts/AdminChatBot.vue";
import AdminDashboard from "@/components/AdminLayouts/AdminDashboard.vue";
import AdminFeedbackList from "@/components/AdminLayouts/AdminFeedbackList.vue";
import AdminPanel from "@/components/AdminLayouts/AdminPanel.vue";
import AdminProfile from "@/components/AdminLayouts/AdminProfile.vue";
import AdminNotification from "@/components/AdminLayouts/AdminNotification.vue";
import AdminNavBar from "@/components/AdminLayouts/AdminNavBar.vue";
import AdminCourseList from "@/components/AdminLayouts/AdminCourseList.vue";
import AdminInstituteList from "@/components/AdminLayouts/AdminInstituteList.vue";
import CourseCards from "@/components/Layouts/CourseCards.vue";
import CourseDetails from "@/components/Layouts/CourseDetails.vue";
import CourseList from "@/components/InstituteLayouts/CourseList.vue";
import EducationBackground from "@/components/StudentLayouts/EducationBackground.vue";
import FindCourses from "@/components/Layouts/FindCourses.vue";
import HomePage from "../components/HomePage.vue";
import AddInstitute from "@/components/InstituteLayouts/AddInstitute.vue";
import InstituteChatBot from "@/components/InstituteLayouts/InstituteChatBot.vue";
import InstituteChangePassword from "@/components/InstituteLayouts/InstituteChangePassword.vue";

import InstituteDashboard from "@/components/InstituteLayouts/InstituteDashboard.vue";
import InstituteDetails from "@/components/Layouts/InstituteDetails.vue";
import InstituteFeedbackList from "@/components/InstituteLayouts/InstituteFeedbackList.vue";
import InstituteList from "@/components/Layouts/InstituteList.vue";
import InstituteNavBar from "@/components/InstituteLayouts/InstituteNavBar.vue";
import InstituteNotification from "@/components/InstituteLayouts/InstituteNotification.vue";
import InstituteProfile from "@/components/InstituteLayouts/InstituteProfile.vue";
import InstituteProfilePage from "@/components/InstituteLayouts/InstituteProfilePage.vue";
import InstitutePanel from "@/components/InstituteLayouts/InstitutePanel.vue";
import LearningPrefrences from "@/components/StudentLayouts/LearningPrefrences.vue";
import MyCoursesList from "@/components/StudentLayouts/MyCoursesList.vue";
import ProfilePage from "@/components/login/ProfilePage.vue";
import RecommendedCourses from "../components/StudentLayouts/RecommendedCourses.vue";
import SignIn from "../components/login/SignIn.vue";
import SignUp from "../components/login/SignUp.vue";
import StudentChangePassword from "@/components/StudentLayouts/StudentChangePassword.vue";
import SearchCards from "@/components/Layouts/SearchCards.vue";
import StudentChatBot from "@/components/StudentLayouts/StudentChatBot.vue";
import StudentDashboard from "@/components/StudentLayouts/StudentDashboard.vue";
import StudentFeedbackList from "@/components/StudentLayouts/StudentFeedbackList.vue";
import StudentInformation from "@/components/login/StudentInformation.vue";
import StudentList from "@/components/AdminLayouts/StudentList.vue";
import StudentNotification from "@/components/StudentLayouts/StudentNotification.vue";
import StudentNavBar from "@/components/StudentLayouts/StudentNavBar.vue";
import StudentProfilePage from "@/components/StudentLayouts/StudentProfilePage.vue";
import StudentPanel from "@/components/StudentLayouts/StudentPanel.vue";
import StudentRanking from "@/components/StudentLayouts/StudentRanking.vue";
import TestFile from "@/components/TestFile.vue";
const routesUrl = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/SignIn",
    component: SignIn,
  },
  {
    path: "/test",
    component: TestFile,
  },
  {
    path: "/SignUp",
    component: SignUp,
  },
  {
    path: "/AboutUs",
    component: AboutUs,
  },
  {
    path: "/AdminDashboard",
    component: AdminDashboard,
  },
  {
    path: "/AdminPanel",
    component: AdminPanel,
  },
  {
    path: "/AdminNavBar",
    component: AdminNavBar,
  },
  {
    path: "/AdminNotification",
    component: AdminNotification,
  },
  {
    path: "/AdminChangePassword",
    component: AdminChangePassword,
  },
  {
    path: "/AdminChatBot",
    component: AdminChatBot,
  },
  {
    path: "/AdminCourseList",
    component: AdminCourseList,
  },
  {
    path: "/AdminProfile",
    component: AdminProfile,
  },
  {
    path: "/AdminFeedbackList",
    component: AdminFeedbackList,
  },
  {
    path: "/AdminInstituteList",
    component: AdminInstituteList,
  },
  {
    path: "/AddCourse",
    component: AddCourse,
  },
  {
    path: "/CourseCards",
    component: CourseCards,
  },
  {
    path: "/CourseList",
    component: CourseList,
  },
  {
    path: "/CourseDetails/:id?",
    component: CourseDetails,
  },
  {
    path: "/EducationBackground",
    component: EducationBackground,
  },
  {
    path: "/FindCourses",
    component: FindCourses,
  },

  {
    path: "/AddInstitute",
    component: AddInstitute,
  },
  {
    path: "/InstituteChatBot",
    component: InstituteChatBot,
  },
  {
    path: "/InstituteChangePassword",
    component: InstituteChangePassword,
  },
  {
    path: "/InstituteDetails/:id?",
    component: InstituteDetails,
  },
  {
    path: "/InstituteDashboard",
    component: InstituteDashboard,
  },
  {
    path: "/InstituteFeedbackList",
    component: InstituteFeedbackList,
  },
  {
    path: "/InstituteList",
    component: InstituteList,
  },
  {
    path: "/InstituteNotification",
    component: InstituteNotification,
  },
  {
    path: "/InstituteNavBar",
    component: InstituteNavBar,
  },
  {
    path: "/InstituteProfile",
    component: InstituteProfile,
  },
  {
    path: "/InstituteProfilePage",
    component: InstituteProfilePage,
  },

  {
    path: "/InstitutePanel",
    component: InstitutePanel,
  },

  {
    path: "/LearningPrefrences",
    component: LearningPrefrences,
  },
  {
    path: "/MyCoursesList",
    component: MyCoursesList,
  },
  {
    path: "/ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/RecommendedCourses",
    component: RecommendedCourses,
  },
  {
    path: "/StudentRanking",
    component: StudentRanking,
  },
  {
    path: "/StudentChangePassword",
    component: StudentChangePassword,
  },
  {
    path: "/StudentChatBot",
    component: StudentChatBot,
  },
  {
    path: "/StudentDashboard",
    component: StudentDashboard,
  },
  {
    path: "/StudentFeedbackList",
    component: StudentFeedbackList,
  },
  {
    path: "/StudentInformation",
    component: StudentInformation,
  },

  {
    path: "/StudentProfilePage",
    component: StudentProfilePage,
  },
  {
    path: "/StudentList",
    component: StudentList,
  },
  {
    path: "/StudentNotification",
    component: StudentNotification,
  },
  {
    path: "/StudentNavBar",
    component: StudentNavBar,
  },
  {
    path: "/StudentPanel",
    component: StudentPanel,
  },
  {
    path: "/StudentRanking",
    component: StudentRanking,
  },
  {
    path: "/SearchCards",
    component: SearchCards,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes: routesUrl,
});

export default router;

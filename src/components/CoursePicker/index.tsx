import { Picker } from "@react-native-picker/picker";
import { useEffect } from "react";
import { Course } from "../../types/Types";
import useRequest from "../../hooks/useRequest";
import handleSource from "../../utils/handleStorage";
import { ToastAndroid } from "react-native";
import axios from "axios";

type CoursePickerProps = { selectedCourseId: string; setSelectedCourseId: (courseId: string) => void };

const [saveCoursesList, getCoursesList] = handleSource<Course[]>();

export default function CoursePicker({ selectedCourseId, setSelectedCourseId }: CoursePickerProps) {
  const [courses, requestCourses, setCourses] = useRequest<Course[]>();

  async function handleCourseListSource() {
    try {
      const cachedCourseList = await getCoursesList(selectedCourseId);
      if (cachedCourseList && cachedCourseList.length > 0) {
        setCourses(cachedCourseList);
      } else {
        const fetchCourses = await axios.get("http://192.168.0.100:5000/index/courses", { data: { username: "14162648760", password: "Ava12345" } });
        saveCoursesList("coursesList", fetchCourses.data);
        setCourses(fetchCourses.data);
      }
    } catch (e) {}
  }

  useEffect(() => {
    handleCourseListSource();
  }, []);

  return (
    <Picker
      style={{ color: "white" }}
      dropdownIconColor={"white"}
      mode="dropdown"
      selectedValue={selectedCourseId}
      onValueChange={(itemValue, itemIndex) => {
        setSelectedCourseId(itemValue);
      }}>
      {courses?.map(
        (course: Course): JSX.Element => (
          <Picker.Item label={course.name} value={course.semesters[0].matriculation_id} key={course.semesters[0].matriculation_id} />
        )
      )}
    </Picker>
  );
}

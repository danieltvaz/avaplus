import { Picker } from "@react-native-picker/picker";
import { useEffect } from "react";
import { Course } from "../../types/Types";
import useRequest from "../../hooks/useRequest";

type CoursePickerProps = { selectedCourseId: string; setSelectedCourseId: (courseId: string) => void };

export default function CoursePicker({ selectedCourseId, setSelectedCourseId }: CoursePickerProps) {
  const [courses, requestCourses] = useRequest<Course[]>();

  useEffect(() => {
    requestCourses("http://192.168.0.100:5000/index/courses", { username: "14162648760", password: "Ava12345" });
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

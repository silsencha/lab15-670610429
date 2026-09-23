import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import type { Course, Student } from "@/lib/types";

type RegisterDialogProps = {
  courses: Course[];
  student: Student;
  enrolledCourseIds: string[];
  onRegister: (courseId: string, enrolledAt: string) => void;
};

export function RegisterDialog({
  courses,
  enrolledCourseIds,
  onRegister,
}: RegisterDialogProps) {
  const [open, setOpen] = useState(false); // true = แสดง Dialog
  const [courseId, setCourseId] = useState("");
  const time = new Date().toTimeString().slice(0, 5);
  const availableCourses = courses.filter(
    (course) => !enrolledCourseIds.includes(course.courseId),
  );

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault(); // ไม่ให้หน้าเว็บ reload
    const now = new Date();
    const [hour, minute] = time.split(":");
    now.setHours(Number(hour));
    now.setMinutes(Number(minute));
    onRegister(courseId, now.toISOString());
    setCourseId(""); // เคลียร์ฟอร์ม
    setOpen(false); // ปิด Dialog
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* ปุ่มที่กดแล้วเปิด Dialog */}
      <DialogTrigger>
        <Button>ลงทะเบียน</Button>
      </DialogTrigger>

      {/* ฟอร์มที่แสดงออกมาเมื่อกดปุ่ม */}
      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <DialogHeader>
            <DialogTitle>ลงทะเบียนเรียน</DialogTitle>
            <DialogDescription>
              เลือกวิชาที่ต้องการลงทะเบียน แล้วกรอกข้อมูลให้ครบ
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-2">
            <Label htmlFor="courseId">วิชา</Label>
            <Select
              value={courseId}
              onValueChange={(value) => setCourseId(value ?? "")}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="เลือกวิชา" />
              </SelectTrigger>

              <SelectContent>
                {availableCourses.map((course) => (
                  <SelectItem key={course.courseId} value={course.courseId}>
                    {course.courseId} - {course.courseTitle}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">เวลา</Label>
            <Input id="time" type="time" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fullName">ชื่อ นศ.</Label>
            <Input id="fullName" defaultValue="Sila Sanapong" readOnly />
          </div>

          <div className="space-y-2">
            <Label htmlFor="program">โปรแกรม</Label>
            <Input id="program" defaultValue="CPE" readOnly />
          </div>

          <DialogFooter>
            <Button type="submit">ยืนยัน</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

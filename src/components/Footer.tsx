type FooterProps = {
  fullName: string;
  studentId: string;
};

export default function Footer({ fullName, studentId }: FooterProps) {
  return (
    <footer className="mt-auto w-full py-4 px-6 text-center text-sm text-muted-foreground border-t border-border bg-background">
      จัดทำโดย {fullName} รหัสนักศึกษา {studentId}
    </footer>
  );
}

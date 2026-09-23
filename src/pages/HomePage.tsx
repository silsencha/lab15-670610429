import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-xl space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            ระบบลงทะเบียนเรียน CPE & ISNE
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Button>
            <Link to={"/enrollment"}>
              <span>ไปหน้าลงทะเบียน</span>
            </Link>
          </Button>
        </CardContent>
      </Card>

      <p className="text-center text-sm text-zinc-400 mt-4">
        จัดทำโดย Sila Sanapong รหัสนักศึกษา 670610429
      </p>
    </div>
  );
}

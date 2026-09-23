import { BookOpen, Calendar, Home, Settings } from "lucide-react";
import { Link, useLocation } from "react-router";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import { Marker } from "@/components/ui/marker";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const items = [
  { title: "หน้าแรก", url: "/", icon: Home },
  { title: "ลงทะเบียนเรียน", url: "/enrollment", icon: BookOpen },
  { title: "ตารางเรียน", url: "/schedule", icon: Calendar },
  { title: "ตั้งค่า", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-2 py-1 text-sm font-semibold">CPE & ISNE</div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>เมนูหลัก</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {/* ✅ แก้ไข: Base UI ใช้ `render={<Link />}` แทน `asChild` */}
                  <SidebarMenuButton
                    isActive={location.pathname === item.url}
                    render={<Link to={item.url} />}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Marker variant="border" />

        <div className="flex items-center gap-3 px-2 py-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>Sila</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="text-sm font-semibold">Sila</span>
            <span className="mt-0.5 w-fit rounded-md border border-border px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
              STUDENT
            </span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

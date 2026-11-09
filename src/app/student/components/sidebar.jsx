"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  CalendarCheck,
  FileText,
  Clock,
  MessageSquare,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  User,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function StudentSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuGroups = [
    {
      title: "Main",
      items: [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "courses", label: "My Courses", icon: BookOpen, badge: "4" },
        { id: "grades", label: "Grades & GPA", icon: GraduationCap },
        { id: "schedule", label: "Class Schedule", icon: CalendarCheck },
      ],
    },
    {
      title: "Academics",
      items: [
        { id: "assignments", label: "Assignments", icon: FileText, badge: "2" },
        { id: "exams", label: "Exams & Quizzes", icon: Clock },
        { id: "messages", label: "Instructor Chat", icon: MessageSquare },
      ],
    },
    {
      title: "Preferences",
      items: [
        { id: "profile", label: "Profile", icon: User },
        { id: "settings", label: "Settings", icon: Settings },
      ],
    },
  ];

  const logoutHandler = async () => {
    // Implement your logout logic here
    console.log("Logging out...");
    await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      window.location.href = "/"; // redirect after sign out
    },
  },
});
  }

  return (
    <div className="flex font-sans">
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 shadow-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        aria-label="Open sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile Backdrop Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 ease-in-out ${
          collapsed ? "w-20" : "w-64"
        } ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Header / Branding */}
        <div className="flex items-center justify-between h-20 px-4 border-b border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shrink-0 shadow-md shadow-emerald-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            {!collapsed && (
              <div className="flex flex-col">
                <span className="font-extrabold text-slate-900 dark:text-white text-base tracking-tight leading-tight">
                  EduPulse
                </span>
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                  Student Portal
                </span>
              </div>
            )}
          </div>

          {/* Desktop Collapse Toggle */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>

          {/* Mobile Close Button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
          {menuGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-1">
              {!collapsed && (
                <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  {group.title}
                </p>
              )}
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveItem(item.id);
                      setMobileOpen(false);
                    }}
                    title={collapsed ? item.label : undefined}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 group relative ${
                      isActive
                        ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 shadow-sm"
                        : "hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-5 h-5 shrink-0 transition-colors ${
                          isActive
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200"
                        }`}
                      />
                      {!collapsed && <span>{item.label}</span>}
                    </div>

                    {!collapsed && item.badge && (
                      <span
                        className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                          isActive
                            ? "bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950"
                            : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-emerald-400 border border-slate-200 dark:border-emerald-500/30"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}

                    {/* Tooltip for collapsed mode */}
                    {collapsed && (
                      <div className="absolute left-full ml-3 px-2.5 py-1 bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                        {item.label}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* User Profile Footer */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50">
          <div
            className={`flex items-center ${
              collapsed ? "justify-center" : "justify-between"
            } p-2 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 shadow-sm`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-800 dark:text-white font-bold text-sm ring-2 ring-emerald-500/30">
                  AH
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900" />
              </div>

              {!collapsed && (
                <div className="flex flex-col text-left">
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-tight">
                    Alex Hunter
                  </span>
                  <span className="text-xs text-slate-400">ID: #ST-9821</span>
                </div>
              )}
            </div>

            {!collapsed && (
              <button
                className="p-1.5 text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                title="Log out"
                onClick={logoutHandler}
              >
                <LogOut className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
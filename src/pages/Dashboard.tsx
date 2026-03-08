import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FileText,
  Clock,
  Users,
  Settings,
  Plus,
  Search,
  MoreHorizontal,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Home,
} from "lucide-react";
import { useState } from "react";

const sidebarItems = [
  { icon: Home, label: "Home", active: false },
  { icon: FileText, label: "Documents", active: true },
  { icon: Clock, label: "Recent", active: false },
  { icon: Users, label: "Shared", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const documents = [
  { id: "1", title: "Q4 Strategy Brief", updated: "2 min ago", collaborators: ["S", "A", "M"], color: "bg-primary" },
  { id: "2", title: "Product Roadmap 2026", updated: "15 min ago", collaborators: ["P", "J"], color: "bg-accent" },
  { id: "3", title: "Design System v3", updated: "1 hour ago", collaborators: ["L", "K", "R"], color: "bg-primary/70" },
  { id: "4", title: "Engineering Standup Notes", updated: "3 hours ago", collaborators: ["D"], color: "bg-accent/70" },
  { id: "5", title: "Marketing Campaign Draft", updated: "Yesterday", collaborators: ["N", "T"], color: "bg-primary" },
  { id: "6", title: "Investor Update Q3", updated: "2 days ago", collaborators: ["C", "A"], color: "bg-accent" },
];

const activity = [
  { user: "Sarah", action: "edited", doc: "Q4 Strategy Brief", time: "2 min ago" },
  { user: "Alex", action: "commented on", doc: "Product Roadmap 2026", time: "15 min ago" },
  { user: "Priya", action: "created", doc: "Sprint Review", time: "1 hour ago" },
  { user: "Marcus", action: "shared", doc: "Design System v3", time: "3 hours ago" },
];

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside
        className={`hidden md:flex flex-col border-r border-border bg-sidebar transition-all duration-300 ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-border">
          {!collapsed && (
            <Link to="/" className="flex items-center gap-2">
              <img src="/favicon.png" alt="SyncSpace" className="h-7 w-7" />
              <span className="font-display text-lg font-bold gradient-text">SyncSpace</span>
            </Link>
          )}
          {collapsed && (
            <Link to="/" className="mx-auto">
              <img src="/favicon.png" alt="SyncSpace" className="h-7 w-7" />
            </Link>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors ${collapsed ? "hidden" : ""}`}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                item.active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              } ${collapsed ? "justify-center" : ""}`}
            >
              <item.icon className="h-4.5 w-4.5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-border">
          <button
            className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors ${collapsed ? "justify-center" : ""}`}
          >
            <LogOut className="h-4.5 w-4.5 shrink-0" />
            {!collapsed && <span>Log out</span>}
          </button>
          {collapsed && (
            <button
              onClick={() => setCollapsed(false)}
              className="flex items-center justify-center w-full mt-2 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-16 border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="md:hidden">
              <Link to="/" className="flex items-center gap-2">
                <img src="/favicon.png" alt="SyncSpace" className="h-6 w-6" />
              </Link>
            </div>
            <h1 className="font-display text-xl font-bold">Documents</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search documents..." className="pl-9 w-64 h-9 bg-muted/50 border-border" />
            </div>
            <Button size="sm" className="gradient-primary shadow-glow-sm hover:opacity-90 transition-opacity">
              <Plus className="h-4 w-4 mr-1" />
              New Doc
            </Button>
          </div>
        </header>

        <div className="flex-1 p-6 overflow-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Documents grid */}
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-4">
                {documents.map((doc, i) => (
                  <Link
                    key={doc.id}
                    to={`/editor/${doc.id}`}
                    className="group glass rounded-xl p-5 hover:shadow-glow-sm hover:-translate-y-0.5 transition-all duration-300 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-10 h-10 rounded-lg ${doc.color} flex items-center justify-center`}>
                        <FileText className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-md hover:bg-muted">
                        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{doc.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3">Edited {doc.updated}</p>
                    <div className="flex -space-x-1.5">
                      {doc.collaborators.map((c, j) => (
                        <div
                          key={j}
                          className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground ring-2 ring-card"
                        >
                          {c}
                        </div>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Activity feed */}
            <div className="glass rounded-xl p-5">
              <h3 className="font-display font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {activity.map((a, i) => (
                  <div key={i} className="flex items-start gap-3 opacity-0 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="w-7 h-7 rounded-full gradient-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground shrink-0 mt-0.5">
                      {a.user[0]}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm">
                        <span className="font-medium">{a.user}</span>{" "}
                        <span className="text-muted-foreground">{a.action}</span>{" "}
                        <span className="font-medium">{a.doc}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{a.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

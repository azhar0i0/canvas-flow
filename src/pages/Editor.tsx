import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bold,
  Italic,
  Underline,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  AlignLeft,
  Image,
  Link as LinkIcon,
  Undo,
  Redo,
  Share2,
  MessageSquare,
  ChevronLeft,
  Check,
  Loader2,
  X,
  Send,
} from "lucide-react";
import { useState, useEffect } from "react";

const toolbarButtons = [
  { icon: Undo, label: "Undo" },
  { icon: Redo, label: "Redo" },
  null, // separator
  { icon: Bold, label: "Bold" },
  { icon: Italic, label: "Italic" },
  { icon: Underline, label: "Underline" },
  null,
  { icon: Heading1, label: "Heading 1" },
  { icon: Heading2, label: "Heading 2" },
  null,
  { icon: List, label: "Bullet List" },
  { icon: ListOrdered, label: "Numbered List" },
  { icon: AlignLeft, label: "Align" },
  null,
  { icon: LinkIcon, label: "Link" },
  { icon: Image, label: "Image" },
];

const fakeCursors = [
  { name: "Sarah", color: "hsl(245 58% 51%)", top: "28%", left: "42%" },
  { name: "Alex", color: "hsl(270 60% 58%)", top: "52%", left: "68%" },
];

const fakeComments = [
  {
    id: 1,
    user: "Sarah",
    text: "Should we add more detail to the timeline section?",
    time: "2 min ago",
    replies: [
      { user: "You", text: "Good idea — I'll expand it after the intro.", time: "1 min ago" },
    ],
  },
  {
    id: 2,
    user: "Alex",
    text: "Love the new structure. The headings really help.",
    time: "15 min ago",
    replies: [],
  },
  {
    id: 3,
    user: "Marcus",
    text: "Can we include the budget breakdown here?",
    time: "1 hour ago",
    replies: [],
  },
];

const collaborators = [
  { name: "Sarah", initial: "S" },
  { name: "Alex", initial: "A" },
  { name: "Marcus", initial: "M" },
];

export default function Editor() {
  const { id } = useParams();
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [saveState, setSaveState] = useState<"saved" | "saving">("saved");
  const [commentInput, setCommentInput] = useState("");

  // Simulate autosave
  useEffect(() => {
    const interval = setInterval(() => {
      setSaveState("saving");
      setTimeout(() => setSaveState("saved"), 1200);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleInput = () => {
    setSaveState("saving");
    setTimeout(() => setSaveState("saved"), 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top bar */}
      <header className="h-14 border-b border-border flex items-center px-4 gap-3 glass-strong z-20">
        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
          <Link to="/dashboard">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>

        <div className="flex items-center gap-2 min-w-0">
          <img src="/favicon.png" alt="SyncSpace" className="h-5 w-5 hidden sm:block" />
          <span className="font-display font-semibold text-sm truncate">
            {id === "demo" ? "Project Brief" : `Document ${id}`}
          </span>
        </div>

        {/* Save indicator */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground ml-2">
          {saveState === "saving" ? (
            <>
              <Loader2 className="h-3 w-3 animate-spin" />
              <span>Saving...</span>
            </>
          ) : (
            <>
              <Check className="h-3 w-3 text-primary" />
              <span>Saved</span>
            </>
          )}
        </div>

        <div className="ml-auto flex items-center gap-2">
          {/* Collaborators */}
          <div className="hidden sm:flex -space-x-1.5 mr-2">
            {collaborators.map((c) => (
              <div
                key={c.name}
                title={c.name}
                className="w-7 h-7 rounded-full gradient-primary flex items-center justify-center text-[11px] font-bold text-primary-foreground ring-2 ring-card"
              >
                {c.initial}
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5"
            onClick={() => setCommentsOpen(!commentsOpen)}
          >
            <MessageSquare className="h-4 w-4" />
            <span className="hidden sm:inline text-xs">{fakeComments.length}</span>
          </Button>

          <Button size="sm" className="gradient-primary shadow-glow-sm hover:opacity-90 transition-opacity gap-1.5">
            <Share2 className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Share</span>
          </Button>
        </div>
      </header>

      {/* Toolbar */}
      <div className="border-b border-border px-4 py-2 flex items-center gap-1 overflow-x-auto">
        {toolbarButtons.map((btn, i) =>
          btn === null ? (
            <div key={i} className="w-px h-5 bg-border mx-1 shrink-0" />
          ) : (
            <button
              key={btn.label}
              title={btn.label}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shrink-0"
            >
              <btn.icon className="h-4 w-4" />
            </button>
          )
        )}
      </div>

      {/* Editor + Comments */}
      <div className="flex-1 flex overflow-hidden">
        {/* Editor area */}
        <div className="flex-1 overflow-auto relative">
          <div className="max-w-3xl mx-auto px-6 md:px-12 py-10">
            <div
              className="prose prose-lg max-w-none focus:outline-none min-h-[60vh] animate-fade-in"
              contentEditable
              suppressContentEditableWarning
              onInput={handleInput}
            >
              <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                Q4 Strategy Brief
              </h1>
              <p className="lead" style={{ color: "hsl(240 10% 46%)" }}>
                This document outlines our strategic priorities for the fourth quarter, including key milestones, resource allocation, and team responsibilities.
              </p>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Executive Summary</h2>
              <p>
                Our primary focus for Q4 is to expand market reach by 35% while maintaining our commitment to product quality and customer satisfaction. This involves launching two new features, strengthening partnerships, and optimizing our go-to-market strategy.
              </p>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Key Objectives</h2>
              <ul>
                <li>Launch real-time collaboration v2 with enhanced cursor tracking</li>
                <li>Achieve 50,000 active workspace users by end of quarter</li>
                <li>Reduce document loading time by 40%</li>
                <li>Establish partnerships with 3 enterprise clients</li>
              </ul>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Timeline</h2>
              <p>
                Phase 1 (October): Feature development and internal testing. Phase 2 (November): Beta rollout and partner onboarding. Phase 3 (December): Full launch and performance review.
              </p>
            </div>

            {/* Simulated cursors */}
            {fakeCursors.map((cursor) => (
              <div
                key={cursor.name}
                className="absolute pointer-events-none animate-float"
                style={{ top: cursor.top, left: cursor.left }}
              >
                <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
                  <path d="M0 0L12 12H5L2 18L0 0Z" fill={cursor.color} />
                </svg>
                <span
                  className="text-[10px] font-medium px-1.5 py-0.5 rounded-md ml-1"
                  style={{ backgroundColor: cursor.color, color: "white" }}
                >
                  {cursor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Comments panel */}
        {commentsOpen && (
          <div className="w-80 border-l border-border bg-card flex flex-col animate-slide-in-right">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <h3 className="font-display font-semibold text-sm">Comments</h3>
              <button
                onClick={() => setCommentsOpen(false)}
                className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 space-y-4">
              {fakeComments.map((comment) => (
                <div key={comment.id} className="space-y-3">
                  <div className="glass rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center text-[9px] font-bold text-primary-foreground">
                        {comment.user[0]}
                      </div>
                      <span className="text-xs font-semibold">{comment.user}</span>
                      <span className="text-[10px] text-muted-foreground ml-auto">{comment.time}</span>
                    </div>
                    <p className="text-sm text-foreground/90">{comment.text}</p>
                  </div>
                  {comment.replies.map((reply, i) => (
                    <div key={i} className="ml-4 glass rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center text-[8px] font-bold text-muted-foreground">
                          {reply.user[0]}
                        </div>
                        <span className="text-xs font-semibold">{reply.user}</span>
                        <span className="text-[10px] text-muted-foreground ml-auto">{reply.time}</span>
                      </div>
                      <p className="text-sm text-foreground/90">{reply.text}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-border">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a comment..."
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  className="h-9 text-sm bg-muted/50"
                />
                <Button size="icon" className="h-9 w-9 gradient-primary shrink-0">
                  <Send className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

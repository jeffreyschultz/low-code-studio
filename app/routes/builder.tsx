import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "~/components/ui/resizable";
import { Separator } from "~/components/ui/separator";
import { ScrollArea } from "~/components/ui/scroll-area";
import { cn } from "~/lib/utils";
import { PanelLeft, LayoutGrid, Settings2, Database, Workflow, PlaySquare } from "lucide-react";

// Mock perspectives
const perspectives = [
  { name: "UI", icon: LayoutGrid, id: "ui" },
  { name: "Data", icon: Database, id: "data" },
  { name: "Logic", icon: Workflow, id: "logic" },
  { name: "Preview", icon: PlaySquare, id: "preview" },
];

export default function BuilderPage() {
  const currentPerspective = "ui"; // Default to UI perspective

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center h-14 px-4 border-b shrink-0">
        <div className="font-semibold text-lg">Low-Code Studio</div>
        <div className="ml-auto">{/* Header actions can go here */}</div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-16 border-r flex flex-col items-center py-4 space-y-2 bg-muted/40">
          <button className="p-2 rounded-md hover:bg-muted" title="Toggle Sidebar">
            <PanelLeft className="h-5 w-5" />
          </button>
          <Separator />
          {perspectives.map((perspective) => (
            <button
              key={perspective.id}
              title={perspective.name}
              className={cn(
                "p-2 rounded-md hover:bg-muted",
                currentPerspective === perspective.id && "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              <perspective.icon className="h-5 w-5" />
            </button>
          ))}
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {currentPerspective === "ui" && (
            <ResizablePanelGroup direction="horizontal" className="flex-1">
              {/* Toolbox Panel (Left) */}
              <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
                <div className="flex flex-col h-full">
                  <div className="p-2 border-b font-medium text-sm">Toolbox</div>
                  <ScrollArea className="flex-1 p-2">
                    <p>UI Components will be listed here.</p>
                    {/* Example items */}
                    <div className="my-2 p-2 border rounded bg-muted/20">Button</div>
                    <div className="my-2 p-2 border rounded bg-muted/20">Input</div>
                    <div className="my-2 p-2 border rounded bg-muted/20">Card</div>
                  </ScrollArea>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              {/* Canvas Panel (Center) */}
              <ResizablePanel defaultSize={60} minSize={30}>
                <div className="flex flex-col h-full">
                  <div className="p-2 border-b font-medium text-sm">Canvas</div>
                  <div className="flex-1 p-4 bg-muted/10 flex items-center justify-center">
                    <p className="text-muted-foreground">Drag and drop components here to build your UI.</p>
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              {/* Properties Panel (Right) */}
              <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
                <div className="flex flex-col h-full">
                  <div className="p-2 border-b font-medium text-sm flex items-center">
                    <Settings2 className="h-4 w-4 mr-2" />
                    Properties
                  </div>
                  <ScrollArea className="flex-1 p-2">
                    <p>Selected component properties will appear here.</p>
                  </ScrollArea>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          )}
          {currentPerspective !== "ui" && (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-muted-foreground text-lg">
                Selected Perspective: {perspectives.find(p => p.id === currentPerspective)?.name || "Unknown"}
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

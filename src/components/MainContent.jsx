import React from 'react';
import ExploreCard from './ExploreCard';

function MainContent() {
  const exploreItems = [
    {
      title: "Justice: What's The Right Thing To Do",
      image: "https://placehold.co/400x250/e0e0e0/808080"
    },
    {
      title: "Let's build GPT: from scratch, in code",
      image: "https://placehold.co/400x250/e0e0e0/808080"
    },
    {
      title: "CS50x 2023 - Lecture 1 - C",
      image: "https://placehold.co/400x250/e0e0e0/808080"
    },
    {
      title: "GENERAL CHEMISTRY explained",
      image: "https://placehold.co/400x250/e0e0e0/808080"
    }
  ];

  return (
    <div className="flex-1 p-8">
      <h1 className="text-3xl font-semibold mb-8">What do you want to learn today?</h1>
      
      <div className="relative mb-12">
        <div className="flex items-center gap-2 rounded-lg border bg-card shadow-sm">
          <input
            type="text"
            placeholder="Upload PDF or paste YouTube video"
            className="input border-0 flex-1"
          />
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto mr-4">
            ⌘ K
          </kbd>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-6">Explore topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exploreItems.map((item, index) => (
            <ExploreCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
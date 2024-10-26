import React from 'react';
import { FiPlus } from 'react-icons/fi';

function Sidebar() {
  return (
    <div className="w-64 border-r bg-card p-4 flex flex-col h-[calc(100vh-4rem)]">
      <button className="btn btn-secondary flex items-center gap-2 mb-6 w-full h-10 text-base">
        <FiPlus className="h-5 w-5" />
        Add content
      </button>

      <div className="space-y-4">
        <h2 className="font-semibold">Welcome to YouLearn</h2>
        <p className="text-sm text-muted-foreground">
          We believe in helping everyone learn smarter. Our AI turns your contents into interactive learning experiences.
        </p>
        <p className="text-sm text-muted-foreground">
          We're just getting started and want to keep improving YouLearn for you.
        </p>
        <p className="text-sm text-muted-foreground">
          Dive in and let us know what you think – your feedback shapes everything we do!
        </p>
      </div>

      <div className="mt-auto">
        <p className="text-sm mb-2">Sign in to continue.</p>
        <button className="btn btn-primary w-full h-10 text-base">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
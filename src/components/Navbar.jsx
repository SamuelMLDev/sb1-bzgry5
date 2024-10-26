import React from 'react';

function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 justify-between">
        <div className="font-semibold text-lg">YouLearn</div>
        <div className="flex items-center gap-4">
          <select className="input h-10 w-28">
            <option>US GB</option>
          </select>
          <button className="btn btn-primary h-10 px-6 text-base">
            Upgrade
          </button>
          <button className="btn btn-secondary h-10 px-6 text-base">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
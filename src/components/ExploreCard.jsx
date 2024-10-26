import React from 'react';

function ExploreCard({ title, image }) {
  return (
    <div className="group rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video relative overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform group-hover:scale-105" 
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium leading-none">{title}</h3>
      </div>
    </div>
  );
}

export default ExploreCard;
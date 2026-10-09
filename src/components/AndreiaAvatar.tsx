import React, { useState } from 'react';

export const AndreiaAvatar: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative inline-block mx-auto mb-1">
      {/* Andréia's Avatar Photo (+25% size) with Decorative Outer Ring */}
      <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full p-2 bg-gradient-to-tr from-[#BD5944] via-[#E8B595] to-[#D49D56] shadow-xl shadow-[#BD5944]/20">
        <div className="w-full h-full rounded-full overflow-hidden bg-[#FAF6F0] border-3 sm:border-4 border-white relative flex items-center justify-center">
          {!imgError ? (
            <img
              src="https://i.ibb.co/0RTVZG9J/Whats-App-Image-2026-09-25-at-4-03-11-PM.jpg"
              alt="Andreia Cakes"
              className="w-full h-full object-cover object-top scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#FAF6F0] text-[#BD5944] font-bold text-3xl font-editorial">
              AC
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React from "react";

const NeobrutalismCard = () => {
  return (
    <div className="max-w-sm bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 rounded-lg">
      {/* Gambar */}
      <img
        src="https://via.placeholder.com/300/FF5733/FFFFFF?text=Project+Image"
        alt="Project Image"
        className="w-full h-48 object-cover border-2 border-black rounded-lg"
      />

      {/* Judul dan Deskripsi */}
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Project Title</h2>
        <p className="text-gray-700 mt-2">
          This is a brief description of the project. It showcases the main
          features and purpose of the project.
        </p>
      </div>

      {/* Tombol Aksi */}
      <div className="mt-6 flex gap-4">
        <button className="flex-1 bg-yellow-400 border-2 border-black shadow-[3px_3px_0_0_#000] py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors">
          Preview
        </button>
        <button className="flex-1 bg-white border-2 border-black shadow-[3px_3px_0_0_#000] py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
          Go to Project
        </button>
      </div>
    </div>
  );
};

export default NeobrutalismCard;
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url('/musMapbg1.jpg')] bg-center bg-contain bg-no-repeat min-h-screen">
      <div className="flex items-center justify-center">BingleFy</div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col gap-4">
          <div className="w-50 h-20 bg-gray-500 flex items-center justify-center">Home</div>
          <div className="w-50 h-20 bg-gray-500 flex items-center justify-center">Login</div>
          <div className="w-50 h-20 bg-gray-500 flex items-center justify-center">Search</div>
        </div>
      </div>
    </div>
  );
}
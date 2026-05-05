export default function Header({ title }) {
  return (
    <header className="absolute top-40 sm:top-50 left-1/2 transform -translate-y-1/2 -translate-x-1/2 p-5 bg_header overflow-hidden z-40">
      
     
      <h1 className="text-5xl font-bold relative z-50">
        {title}
      </h1>

      
      <div className="absolute top-1/2 left-1/2 w-[150%] h-[550%] -translate-x-1/2 -translate-y-1/2 inset-0 gradient-rotate z-10 "></div>

    </header>
  );
}

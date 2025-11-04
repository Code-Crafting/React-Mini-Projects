const CurrentSec = ({ icon: Icon, name, ref }) => {
  return (
    <div className="flex flex-col items-center gap-1 relative z-10">
      <div
        className="w-11  aspect-square bg-black grid place-items-center rounded-full"
        ref={ref}
      >
        <Icon className="text-lg text-white" />
      </div>
      <p className="font-semibold">{name}</p>
    </div>
  );
};

export default CurrentSec;

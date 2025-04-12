
const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f14_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f14_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_90%_70%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/20 to-neutral-50/90 pointer-events-none" />
    </div>
  );
};

export default BackgroundGrid;

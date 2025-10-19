import { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { galleryItems } from "../../lib/gallery-data";

export const PhotoGallery = ({
  animationDelay = 0.5,
}: {
  animationDelay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // First make the container visible with a fade-in
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay * 1000);

    // Then start the photo animations after a short delay
    const animationTimer = setTimeout(
      () => {
        setIsLoaded(true);
      },
      (animationDelay + 0.4) * 1000
    ); // Add 0.4s for the opacity transition

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(animationTimer);
    };
  }, [animationDelay]);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for each photo
  const photoVariants = {
    hidden: () => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    }),
    visible: (custom: { x: any; y: any; order: number }) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15,
      },
    }),
  };

  // Get 5 random selected photos
  const selectedPhotos = galleryItems.filter(item => item.selected && item.type === 'image');
  const shuffledSelected = selectedPhotos.sort(() => 0.5 - Math.random());
  const randomPhotos = shuffledSelected.slice(0, 5);

  // Photo positions - responsive layout for mobile and desktop
  const photos = randomPhotos.map((photo, index) => {
    // Mobile positions - more compact
    const mobilePositions = [
      { x: "-200px", y: "10px", zIndex: 50, direction: "left" as Direction },
      { x: "-100px", y: "20px", zIndex: 40, direction: "left" as Direction },
      { x: "0px", y: "5px", zIndex: 30, direction: "right" as Direction },
      { x: "100px", y: "15px", zIndex: 20, direction: "right" as Direction },
      { x: "200px", y: "25px", zIndex: 10, direction: "left" as Direction },
    ];

    // Desktop positions - wider spread
    const desktopPositions = [
      { x: "-320px", y: "15px", zIndex: 50, direction: "left" as Direction },
      { x: "-160px", y: "32px", zIndex: 40, direction: "left" as Direction },
      { x: "0px", y: "8px", zIndex: 30, direction: "right" as Direction },
      { x: "160px", y: "22px", zIndex: 20, direction: "right" as Direction },
      { x: "320px", y: "44px", zIndex: 10, direction: "left" as Direction },
    ];

    return {
      ...photo,
      order: index,
      mobilePosition: mobilePositions[index],
      desktopPosition: desktopPositions[index],
      direction: mobilePositions[index].direction,
    };
  });

  return (
    <div className="mt-8 sm:mt-12 relative z-0 photo-gallery-container">
       <div className="absolute inset-0 max-md:hidden top-[200px] -z-10 h-[300px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <p className="lg:text-md mb-2 mt-4 text-center text-xs font-light uppercase tracking-widest text-slate-600 px-4">
        A Journey Through Visual Stories
      </p>
      <h3 className="z-20 mx-auto max-w-2xl justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text py-3 text-center text-3xl sm:text-4xl md:text-7xl text-transparent px-4">
        Welcome to Our <span className="text-amber-500">Gallery</span>
      </h3>
      <div className="relative mb-4 sm:mb-6 h-[240px] sm:h-[280px] lg:h-[350px] w-full items-center justify-center lg:flex px-4 sm:px-0">
        <motion.div
          className="relative mx-auto flex w-full max-w-7xl justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex w-full justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <div className="relative h-[140px] w-[140px] sm:h-[180px] sm:w-[180px] lg:h-[220px] lg:w-[220px]">
              {[...photos].reverse().map((photo) => (
                <motion.div
                  key={photo.id}
                  className="absolute left-0 top-0"
                  style={{ zIndex: photo.mobilePosition.zIndex }}
                  variants={photoVariants}
                  custom={{
                    x: typeof window !== 'undefined' && window.innerWidth < 1024
                      ? photo.mobilePosition.x
                      : photo.desktopPosition.x,
                    y: typeof window !== 'undefined' && window.innerWidth < 1024
                      ? photo.mobilePosition.y
                      : photo.desktopPosition.y,
                    order: photo.order,
                  }}
                >
                  <Photo
                    width={140}
                    height={140}
                    src={photo.src}
                    alt="Jewelry AI Portfolio"
                    direction={photo.direction}
                    className="sm:!w-[180px] sm:!h-[180px] lg:!w-[220px] lg:!h-[220px]"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex w-full justify-center">
        <a href="/galleryx">
          <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white hover:from-amber-600 hover:to-yellow-700 touch-manipulation min-h-[48px] px-6 sm:px-8 text-sm sm:text-base">
                            View All Gallery
          </Button>
        </a>
      </div>
    </div>
  );
};

function getRandomNumberInRange(min: number, max: number): number {
  if (min >= max) {
    throw new Error("Min value should be less than max value");
  }
  return Math.random() * (max - min) + min;
}

type Direction = "left" | "right";

export const Photo = ({
  src,
  alt,
  className,
  direction,
  width,
  height,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  direction?: Direction;
  width: number;
  height: number;
}) => {
  const [rotation, setRotation] = useState<number>(0);
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  useEffect(() => {
    const randomRotation =
      getRandomNumberInRange(1, 4) * (direction === "left" ? -1 : 1);
    setRotation(randomRotation);
  }, [direction]);

  function handleMouse(event: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
    clientY: number;
  }) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const resetMouse = () => {
    x.set(200);
    y.set(200);
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.2, zIndex: 9999 }}
      whileHover={{
        scale: 1.1,
        rotateZ: 2 * (direction === "left" ? -1 : 1),
        zIndex: 9999,
      }}
      whileDrag={{
        scale: 1.1,
        zIndex: 9999,
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width,
        height,
        perspective: 400,
        transform: `rotate(0deg) rotateX(0deg) rotateY(0deg)`,
        zIndex: 1,
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        touchAction: "none",
      }}
      className={cn(
        className,
        "relative mx-auto shrink-0 cursor-grab active:cursor-grabbing touch-manipulation"
      )}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      draggable={false}
      tabIndex={0}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm">
        <img
          className={cn("rounded-2xl sm:rounded-3xl object-cover w-full h-full select-none")}
          src={src}
          alt={alt}
          {...props}
          draggable={false}
        />
      </div>
    </motion.div>
  );
};

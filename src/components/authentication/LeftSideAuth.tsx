import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GetMousePosition } from "@/lib/getMousePosition";

type Props = {
  showPassword: boolean;
};

const LeftSideAuth = ({ showPassword }: Props) => {
  const { mouseX, mouseY } = GetMousePosition();

  const [eyePosition, setEyePosition] = useState<{
    eye: {
      x: number;
      y: number;
    };
  }>({
    eye: { x: 0, y: 0 },
  });

  useEffect(() => {
    const calculateEyeMovement = () => {
      const eyeMovementRange = 5;
      const offsetX =
        (mouseX - window.innerWidth / 2) / (window.innerWidth / 2.5);
      const offsetY =
        (mouseY - window.innerHeight / 1.5) / (window.innerHeight / 2.5);

      setEyePosition({
        eye: {
          x: offsetX * eyeMovementRange,
          y: offsetY * eyeMovementRange,
        },
      });
    };

    calculateEyeMovement();
  }, [mouseX, mouseY]);

  return (
    <div className="h-full">
      <div className="absolute left-[24%] top-[25%] bg-blue-500 h-[400px] w-[200px]">
        <div className="relative h-full w-full">
          {/* Right Eye */}
          <div className="absolute top-10 left-36 h-[20px] w-[20px] bg-white rounded-full">
            <div className="relative h-full w-full">
              <motion.div
                className="absolute top-2 left-2 h-[10px] w-[10px] bg-black rounded-full"
                animate={{
                  x: showPassword ? -6 : eyePosition.eye.x,
                  y: showPassword ? -4 : eyePosition.eye.y,
                }}
              />
            </div>
          </div>

          {/* Left Eye */}
          <div className="absolute top-10 left-20 h-[20px] w-[20px] bg-white rounded-full">
            <div className="relative h-full w-full">
              <motion.div
                className="absolute top-2 left-2 h-[10px] w-[10px] bg-black rounded-full"
                animate={{
                  x: showPassword ? -6 : eyePosition.eye.x,
                  y: showPassword ? -4 : eyePosition.eye.y,
                }}
              />
            </div>
          </div>

          <div className="absolute top-20 left-24 h-[5px] w-[70px] bg-black" />
        </div>
      </div>

      <div className="absolute left-[17%] top-[31.5%] bg-green-500 h-[350px] w-[170px] rounded-t-full">
        <div className="relative h-full w-full">
          {/* Left Eye */}
          <div className="absolute top-10 left-28 h-[20px] w-[20px] bg-white rounded-full">
            <div className="relative h-full w-full">
              <motion.div
                className="absolute top-2 left-2 h-[10px] w-[10px] bg-black rounded-full"
                animate={{
                  x: showPassword ? -6 : eyePosition.eye.x,
                  y: showPassword ? -4 : eyePosition.eye.y,
                }}
              />
            </div>
          </div>

          {/* Right Eye */}
          <div className="absolute top-10 left-20 h-[20px] w-[20px] bg-white rounded-full">
            <div className="relative h-full w-full">
              <motion.div
                className="absolute top-2 left-2 h-[10px] w-[10px] bg-black rounded-full"
                animate={{
                  x: showPassword ? -6 : eyePosition.eye.x,
                  y: showPassword ? -4 : eyePosition.eye.y,
                }}
              />
            </div>
          </div>

          <div className="absolute top-20 left-16 h-[5px] w-[80px] bg-black" />
        </div>
      </div>

      <div className="absolute left-[13%] top-[46.2%] bg-orange-400 h-[230px] w-[150px]">
        <div className="relative h-full w-full">
          {/* Left Eye */}
          <div className="absolute top-10 left-28 h-[20px] w-[20px] bg-white rounded-full">
            <div className="relative h-full w-full">
              <motion.div
                className="absolute top-2 left-2 h-[10px] w-[10px] bg-black rounded-full"
                animate={{
                  x: showPassword ? -6 : eyePosition.eye.x,
                  y: showPassword ? -4 : eyePosition.eye.y,
                }}
              />
            </div>
          </div>

          {/* Right Eye */}
          <div className="absolute top-10 left-20 h-[20px] w-[20px] bg-white rounded-full">
            <div className="relative h-full w-full">
              <motion.div
                className="absolute top-2 left-2 h-[10px] w-[10px] bg-black rounded-full"
                animate={{
                  x: showPassword ? -6 : eyePosition.eye.x,
                  y: showPassword ? -4 : eyePosition.eye.y,
                }}
              />
            </div>
          </div>

          <div className="absolute top-20 left-20 h-[5px] w-[50px] bg-black" />
        </div>
      </div>

      <div className="absolute left-[28%] top-[50%] bg-yellow-300 h-[200px] w-[200px] rounded-t-full">
        <div className="relative h-full w-full">
          {/* Left Eye */}
          <div className="absolute top-10 left-28 h-[20px] w-[20px] bg-white rounded-full">
            <div className="relative h-full w-full">
              <motion.div
                className="absolute top-2 left-2 h-[10px] w-[10px] bg-black rounded-full"
                animate={{
                  x: showPassword ? -6 : eyePosition.eye.x,
                  y: showPassword ? -4 : eyePosition.eye.y,
                }}
              />
            </div>
          </div>

          {/* Right Eye */}
          <div className="absolute top-10 left-20 h-[20px] w-[20px] bg-white rounded-full">
            <div className="relative h-full w-full">
              <motion.div
                className="absolute top-2 left-2 h-[10px] w-[10px] bg-black rounded-full"
                animate={{
                  x: showPassword ? -6 : eyePosition.eye.x,
                  y: showPassword ? -4 : eyePosition.eye.y,
                }}
              />
            </div>
          </div>

          <div className="absolute top-20 left-16 h-[5px] w-[80px] bg-black" />
        </div>
      </div>
    </div>
  );
};

export { LeftSideAuth };

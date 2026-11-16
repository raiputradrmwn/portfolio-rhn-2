import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

interface FloatingDockProps {
  items: { title: string; icon: React.ReactNode; href: string; active?: boolean }[];
  desktopClassName?: string;
  mobileClassName?: string;
  onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  onLinkClick,
}: FloatingDockProps) => {
  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        onLinkClick={onLinkClick}
      />
      <FloatingDockMobile
        items={items}
        className={mobileClassName}
        onLinkClick={onLinkClick}
      />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
  onLinkClick,
}: {
  items: { title: string; icon: React.ReactNode; href: string; active?: boolean }[];
  className?: string;
  onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (onLinkClick) onLinkClick(e, item.href);
                    setOpen(false);
                  }}
                  aria-label={item.title}
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-full border border-border shadow-md backdrop-blur-xl",
                    item.active ? "bg-brand text-brand-foreground" : "bg-background/90 text-foreground"
                  )}
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/80 shadow-lg backdrop-blur-xl"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-muted-foreground" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  onLinkClick,
}: {
  items: { title: string; icon: React.ReactNode; href: string; active?: boolean }[];
  className?: string;
  onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-3 rounded-2xl border border-border bg-background/70 px-4 pb-3 shadow-lg shadow-black/5 backdrop-blur-xl md:flex",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          {...item}
          onLinkClick={onLinkClick}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  active,
  onLinkClick,
}: {
  mouseX: MotionValue;
  active?: boolean;
  title: string;
  icon: React.ReactNode;
  href: string;
  onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const widthTransform = useTransform(distance, [-120, 0, 120], [35, 70, 35]);
  const heightTransform = useTransform(distance, [-120, 0, 120], [35, 70, 35]);
  const widthTransformIcon = useTransform(distance, [-120, 0, 120], [20, 40, 20]);
  const heightTransformIcon = useTransform(distance, [-120, 0, 120], [20, 40, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#") && onLinkClick) {
      onLinkClick(e, href);
    }
  };

  return (
    <a href={href} onClick={handleClick} aria-label={title} aria-current={active ? "true" : undefined}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full transition-colors",
          active ? "bg-brand text-brand-foreground" : "bg-muted text-foreground"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-border bg-background px-2 py-0.5 text-xs whitespace-pre text-foreground"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}

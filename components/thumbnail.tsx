import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "@/components/user-avatar";

interface ThumbnailProps {
  src: string | null;
  fallback: string;
  isLive: boolean;
  username: string;
}

export const Thumbnail = ({
  src,
  fallback,
  isLive,
  username,
}: ThumbnailProps) => {
  let content;

  if (!src) {
    content = (
      <div className="bg-background flex flex-col items-center justify-center gap-y-4 h-full w-full transition-transform group-hover:translate-x-2 group-hover:-translate-y-1 rounded-md">
        <UserAvatar
          size="lg"
          showBadge
          username={username}
          imageUrl={fallback}
          isLive={isLive}
        />
      </div>
    );
  } else {
    content = (
      <Image
        src={src}
        fill
        alt="Stream thumbnail"
        className="object-cover transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-md"
      />
    );
  }

  return (
    <div className="group aspect-video relative rounded-md cursor-pointer">
      <div className="rounded-md absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" />
      {content}
    </div>
  );
};

export const ThumbnailSkeleton = () => {
  return (
    <div className="group aspect-video relative rounded-xl cursor-pointer">
      <Skeleton className="h-full w-full" />
    </div>
  );
};

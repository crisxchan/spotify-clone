"use client";

import SongItem from "@/components/SongItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";

interface PageContentProps {
  songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs added.</div>;
  }

  const onPlay = useOnPlay(songs);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
        {songs.map((song) => (
          <SongItem
            key={song.id}
            onClick={(id: string) => {
              onPlay(id);
            }}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};

export default PageContent;

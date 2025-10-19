import { Star, Grid3x3, Film } from 'lucide-react';

interface DocksProps {
  selectedCategory: "all" | "photos" | "videos" | "featured";
  onCategoryChange: (category: "all" | "photos" | "videos" | "featured") => void;
}

export const Component = ({ selectedCategory, onCategoryChange }: DocksProps) => {
  return (
    <div
      className="
        inline-flex rounded-full overflow-hidden relative
        bg-white/30 dark:bg-black/40
        backdrop-blur-lg
        shadow-2xl shadow-black/10
        transition-colors duration-500
      "
    >
      <button
        onClick={() => onCategoryChange('featured')}
        className={`
          px-3 py-2 rounded-l-full
          flex items-center gap-1.5
          ${selectedCategory === 'featured'
            ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-md'
            : 'text-slate-700 dark:text-white bg-transparent hover:bg-white/40 dark:hover:bg-white/10'
          }
          transition-all duration-300
          focus:outline-none focus:ring-0
          group
        `}
        aria-label="Featured"
      >
        <Star
          className={`
            w-4 h-4
            text-current
            transition-transform duration-300
            group-hover:scale-110
            ${selectedCategory === 'featured' ? 'fill-current' : ''}
          `}
          aria-hidden="true"
        />
        <span className="select-none font-medium text-sm">Featured</span>
      </button>

      <button
        onClick={() => onCategoryChange('all')}
        className={`
          px-3 py-2
          flex items-center gap-1.5
          ${selectedCategory === 'all'
            ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-md'
            : 'text-slate-700 dark:text-white bg-transparent hover:bg-white/40 dark:hover:bg-white/10'
          }
          transition-all duration-300
          focus:outline-none focus:ring-0
          group
        `}
        aria-label="All"
      >
        <Grid3x3
          className="
            w-4 h-4
            text-current
            transition-transform duration-300
            group-hover:scale-110
          "
          aria-hidden="true"
        />
        <span className="select-none font-medium text-sm">All</span>
      </button>

      <button
        onClick={() => onCategoryChange('videos')}
        className={`
          px-3 py-2 rounded-r-full
          flex items-center gap-1.5
          ${selectedCategory === 'videos'
            ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-md'
            : 'text-slate-700 dark:text-white bg-transparent hover:bg-white/40 dark:hover:bg-white/10'
          }
          transition-all duration-300
          focus:outline-none focus:ring-0
          group
        `}
        aria-label="Videos"
      >
        <Film
          className="
            w-4 h-4
            text-current
            transition-transform duration-300
            group-hover:scale-110
          "
          aria-hidden="true"
        />
        <span className="select-none font-medium text-sm">Videos</span>
      </button>
    </div>
  );
};

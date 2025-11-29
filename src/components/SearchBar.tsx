import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  const [category, setCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Education", "Signals", "News", "Analysis"];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row items-stretch bg-secondary/80 backdrop-blur-sm rounded-full p-2 border border-border shadow-card">
        {/* Category Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between gap-2 px-4 py-3 sm:py-2 text-sm font-medium text-foreground bg-muted rounded-full sm:rounded-l-full sm:rounded-r-none hover:bg-muted/80 transition-colors min-w-[120px] w-full sm:w-auto"
          >
            {category}
            <ChevronDown
              size={16}
              className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-full sm:w-40 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setCategory(cat);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors ${
                    category === cat ? "text-primary bg-muted" : "text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Input */}
        <div className="flex-1 flex items-center px-4 py-2 sm:py-0">
          <Search size={18} className="text-muted-foreground mr-3 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search resources, tutorials, signals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
          />
        </div>

        {/* Search Button */}
        <Button variant="gold" className="rounded-full mt-2 sm:mt-0">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;

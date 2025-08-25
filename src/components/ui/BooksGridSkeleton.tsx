import { Card } from "@/components/ui/card";

const BooksGridSkeleton = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <Card
          key={i}
          className="overflow-hidden animate-pulse bg-gray-200 dark:bg-gray-700 h-96 rounded-2xl"
        />
      ))}
    </div>
  );
};

export default BooksGridSkeleton;

import { Button } from "@/components/ui/button";
import { Award, BadgePlus, List, TrendingUp } from "lucide-react";

const Nav = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-y-2 md:gap-y-0 gap-x-5 font-light text-xs">
      <Button variant={"ghost"}>
        Popular
        <TrendingUp strokeWidth={1} />
      </Button>
      <Button variant={"ghost"}>
        News
        <BadgePlus strokeWidth={1} />
      </Button>
      <Button variant={"ghost"}>
        Top rated
        <Award strokeWidth={1} />
      </Button>
      <Button variant={"ghost"}>
        All topics
        <List strokeWidth={1} />
      </Button>
    </div>
  );
};

export { Nav };

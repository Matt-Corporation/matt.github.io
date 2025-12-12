import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-2 py-4 prose prose-stone dark:prose-invert max-w-full">
      <Typography variant="h1">matt Corp.</Typography>
      <Typography>
        TODO: we must make a base for our brother in laws(organizace svoboda)
      </Typography>
      <Button asChild>
        <Link href="/news/nothing" draggable={false}>
          Learn More
        </Link>
      </Button>
    </main>
  );
}

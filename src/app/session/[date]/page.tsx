import { formatDateLabel } from "@/lib/data";
import Link from "next/link";

export default async function SessionPage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  const formattedDate = formatDateLabel(date);

  return (
    <div>
      <h1>{formattedDate}</h1>
    </div>
  );
}

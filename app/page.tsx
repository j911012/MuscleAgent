import { CalorieCard } from "@/components/CalorieCard";
import { CalendarCard } from "@/components/CalendarCard";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <section className="grid gap-4 md:grid-cols-2">
        {/* <div className="order-2 md:order-1">
          <CalorieCard />
        </div> */}
        <div className="order-1 md:order-2">
          <CalendarCard />
        </div>
      </section>
    </div>
  );
}

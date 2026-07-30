import { type Metadata } from "next";

import { CalBooking } from "@/components/CalBooking";
import { SimpleLayout } from "@/components/SimpleLayout";
import { Waves } from "@/components/Waves";

export const metadata: Metadata = {
  title: "Bookings",
  description: "Pick the kind of conversation you're after.",
};

export default function Bookings() {
  return (
    <div className="bookings">
      <Waves />
      <SimpleLayout title="Bookings" intro="" className="" size="wide">
        <CalBooking />
      </SimpleLayout>
    </div>
  );
}

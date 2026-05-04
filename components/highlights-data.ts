import {
  MessageSquareQuote,
  Mic2,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Highlight = {
  title: string;
  category: string;
  date: string;
  summary: string;
  story: string;
  role: string;
  outcome: string;
  link?: string;
  image?: string;
  icon: "trophy" | "mic" | "quote" | "users";
};

export const iconMap: Record<Highlight["icon"], LucideIcon> = {
  trophy: Trophy,
  mic: Mic2,
  quote: MessageSquareQuote,
  users: Users,
};

export const highlights: Highlight[] = [
  {
    title: "Cloudathon@SJSU Winner",
    category: "Hackathon",
    date: "2026",
    summary: "Won 1st place at Cloudathon@SJSU after 14 AWS challenges and a 5-minute final pitch.",
    story:
      "Cloudathon@SJSU was one of the most intense and rewarding competitions I have been part of: 14 challenges, a live leaderboard, 100+ teams, and only 5 minutes to pitch. We were tied with two other teams near the end, then won it through the final pitch, clear communication, and trusting each other under pressure.",
    role: "Worked with Dev Patel, Harishita Gupta, and Vatsal G. across the AWS challenges, sharing tips, checking in constantly, and helping the team move quickly without losing focus.",
    outcome:
      "Won 1st place while gaining hands-on experience with multiple AWS services, with support from the AWS team, NETS at San Jose State University, judges, and sponsors.",
    image: "/cludathon-sjsu.jpg",
    icon: "trophy",
  },
];

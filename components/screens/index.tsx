import type { ShowcaseScreenId } from "@/lib/content";
import { HeroScreen } from "./HeroScreen";
import { TimerScreen } from "./TimerScreen";
import { RequestsScreen } from "./RequestsScreen";
import { CompanionScreen } from "./CompanionScreen";
import { GroupScreen } from "./GroupScreen";

export const screenComponents: Record<ShowcaseScreenId, () => JSX.Element> = {
  hero: HeroScreen,
  timer: TimerScreen,
  requests: RequestsScreen,
  companion: CompanionScreen,
  group: GroupScreen,
};

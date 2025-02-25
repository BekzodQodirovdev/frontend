import { Home } from "../pages/home/home";
import { Settings } from "../pages/settings/settings";
import { CustomStatistic } from "../pages/statistic/statistic";

export default [
    {
        comp: Home,
    },
    {
        comp: CustomStatistic,
        path: "/statistic",
    },
    {
        comp: Settings,
        path: "/settings",
    },
];

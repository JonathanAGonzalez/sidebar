import {
  FiActivity,
  FiBarChart2,
  FiCreditCard,
  FiFile,
  FiGrid,
  FiBell,
} from "react-icons/fi";
import type { MenuItem } from "@typez/sidebar";

export const menuItems: MenuItem[] = [
  {
    name: "Dashboard",
    icon: FiGrid,
    path: "/dashboard",
    submenu: [
      {
        name: "Activity",
        icon: FiActivity,
        path: "/activities",
      },
      {
        name: "Traffic",
        icon: FiBarChart2,
        path: "/traffic",
      },
      {
        name: "Statistic",
        icon: FiActivity,
        path: "/statistic",
      },
    ],
  },
  {
    name: "Invoices",
    icon: FiFile,
    path: "/invoices",
  },
  {
    name: "Wallet",
    icon: FiCreditCard,
    path: "/wallet",
  },
  {
    name: "Notification",
    icon: FiBell,
    path: "/notification",
  },
];

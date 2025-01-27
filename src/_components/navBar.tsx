/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Spinner from "./Spinner";
import { Switch } from "~/components/ui/switch";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Cookie from "js-cookie";
import {
  useBooleanValue,
  useLanguageStore,
  useUserDataStore,
} from "~/APIs/store";
import { Text } from "./Text";
import { FaSearch, FaTachometerAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { PiChatCircleBold } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import LanguageSwitcher from "./LanguageSwitcher";

const translations = {
  en: {
    opream: "OPream",
    onWay: "On Way",
    userName: "Ahmed Mohamed",
    userRole: "Admin",
    dashboard: "Dashboard",
    users: "Users",
    chats: "Chats",
    reports: "Reports",
    settings: "Settings",
    activeUsers: "Active Users",
    lastRegistrationRequest: "Last Registration Request",
    themeToggle: "Dark Mode",
    notifications: "Notifications",
    profile: "Profile",
    signOut: "Sign Out",
    signedInAs: "Signed in as",
    search: "Search",
  },
  ar: {
    opream: "أوبريم",
    onWay: "في الطريق",
    userName: "أحمد محمد",
    userRole: "مسؤول",
    dashboard: "لوحة التحكم",
    users: "المستخدمون",
    chats: "الدردشات",
    reports: "التقارير",
    settings: "الإعدادات",
    activeUsers: "المستخدمون النشطون",
    lastRegistrationRequest: "آخر طلب تسجيل",
    themeToggle: "الوضع الداكن",
    notifications: "الإشعارات",
    profile: "الملف الشخصي",
    signOut: "تسجيل الخروج",
    signedInAs: "تم تسجيل الدخول باسم",
    search: "بحث",
  },
  fr: {
    opream: "OPream",
    onWay: "En chemin",
    userName: "Ahmed Mohamed",
    userRole: "Administrateur",
    dashboard: "Tableau de bord",
    users: "Utilisateurs",
    chats: "Discussions",
    reports: "Rapports",
    settings: "Paramètres",
    activeUsers: "Utilisateurs actifs",
    lastRegistrationRequest: "Dernière demande d'inscription",
    themeToggle: "Mode sombre",
    notifications: "Notifications",
    profile: "Profil",
    signOut: "Déconnexion",
    signedInAs: "Connecté en tant que",
    search: "Recherche",
  },
  ru: {
    opream: "ОПрем",
    onWay: "В пути",
    userName: "Ахмед Мохамед",
    userRole: "Администратор",
    dashboard: "Панель управления",
    users: "Пользователи",
    chats: "Чаты",
    reports: "Отчеты",
    settings: "Настройки",
    activeUsers: "Активные пользователи",
    lastRegistrationRequest: "Последний запрос на регистрацию",
    themeToggle: "Темный режим",
    notifications: "Уведомления",
    profile: "Профиль",
    signOut: "Выйти",
    signedInAs: "Вошли как",
    search: "Поиск",
  },
};

const useWindowDimensions = () => {
  const isClient = typeof window === "object";
  const [windowSize, setWindowSize] = useState(
    isClient
      ? { width: window.innerWidth, height: window.innerHeight }
      : { width: undefined, height: undefined },
  );

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  return windowSize;
};

interface NavBarLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  small: boolean;
  url: string;
}

const NavBarLink = ({
  href,
  icon: Icon,
  label,
  small,
  url,
  children,
  isDropdownOpen,
  toggleDropdown,
}: NavBarLinkProps & {
  children?: React.ReactNode;
  isDropdownOpen?: boolean;
  toggleDropdown?: () => void;
}) => {
  // console.log("👾 ~ url:", url);
  const isActive = url === href || isDropdownOpen;

  return (
    <li className={`relative ${isActive ? "text-primary2" : ""}`}>
      <Link
        onClick={(e) => {
          if (href === "/users" && toggleDropdown) {
            e.preventDefault();
            toggleDropdown();
          }
        }}
        className={`mt-4 flex items-center gap-x-3.5 px-2.5 py-2 font-sans font-semibold ${
          small ? "w-[40px]" : ""
        } text-md group bg-bgPrimary text-navLinks hover:bg-bgThird hover:text-primary2`}
        href={href}
      >
        <Icon
          className={`h-10 w-10 ${small ? "" : "pl-4"} ${
            isActive ||
            (href === "/users" &&
              (url === "/active-users" || url === "/registration-requests"))
              ? "text-primary2"
              : "text-textSecondary"
          }`}
        />

        {!small && (
          <p
            className={`translate-y-0.5 ${
              isActive ||
              (href === "/users" &&
                (url === "/active-users" || url === "/registration-requests"))
                ? "font-bold text-textPrimary"
                : "text-textSecondary"
            }`}
          >
            {label}
          </p>
        )}
      </Link>

      {isDropdownOpen && children && (
        <ul className="ml-12 space-y-1 text-sm text-textSecondary">
          {children}
        </ul>
      )}
    </li>
  );
};

const NavBar = () => {
  const bool = useBooleanValue((state) => state.boolean);

  const language = useLanguageStore((state) => state.language); // Get current language
  const t = translations[language] || translations.en; // Fallback to English
  const [search, setSearch] = useState("");

  const path = usePathname();
  // console.log("👾 ~ NavBar ~ path:", path);
  const toggleNav = useBooleanValue((state: any) => state.toggle);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const [profile, setProfile] = useState(false);
  const toggleProfile = () => {
    setProfile(!profile);
  };
  const [isClient, setIsClient] = useState(false);
  const userData = useUserDataStore.getState().userData;
  useEffect(() => {
    setIsClient(true);
  }, []);
  const { theme, setTheme } = useTheme();
  const url = usePathname();
  const [small, setSmall] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const handleThemeChange = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };
  const toggleNavbar5 = () => {
    setIsOpen5(!isOpen5);
  };

  const DeleteCookie = () => {
    Cookie.remove("token");
    useUserDataStore.getState().clearUserData();
  };

  const toggleNavbarSmall = () => {
    setSmall(!small);
    toggleNav();
    if (!small == true) {
      setIsOpen5(true);
    }
    if (small == true) {
      setIsOpen5(false);
    }
  };
  const userId = userData.id;

  const OpenSideBar = () => {
    setIsOpen(!isOpen);
  };

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width !== undefined && width >= 1023) {
      setIsOpen(true);
    }
  }, [width]);

  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const toggleUserDropdown = () => {
    setUserDropdownOpen((prev) => !prev);
  };

  const navLinks = [
    {
      href: "/",
      icon: FaTachometerAlt,
      label: t.dashboard,
    },
    {
      href: "/users",
      icon: FaRegUser,
      label: t.users,
      children: (
        <>
          <li>
            <Link
              href="/active-users"
              className={`${
                path === "/active-users"
                  ? "text-primary2"
                  : "text-textSecondary"
              } ${small ? "absolute left-12 top-8 z-[2002] w-[200px] rounded-t-md border-l border-r border-t border-borderPrimary/50" : ""} block bg-bgPrimary px-4 py-2 font-semibold hover:bg-bgSecondary hover:text-primary2`}
            >
              {t.activeUsers}
            </Link>
          </li>
          <li>
            <Link
              href="/registration-requests"
              className={`${
                path === "/registration-requests"
                  ? "text-primary2"
                  : "text-textSecondary"
              } ${small ? "absolute left-12 top-16 z-[2002] w-[200px] rounded-b-md border-b border-l border-r border-borderPrimary/50" : ""} block bg-bgPrimary px-4 py-2 font-semibold hover:bg-bgSecondary hover:text-primary2`}
            >
              {t.lastRegistrationRequest}
            </Link>
          </li>
        </>
      ),
    },
    {
      href: "/chats",
      icon: PiChatCircleBold,
      label: t.chats,
    },
    {
      href: "/reports",
      icon: TbReportAnalytics,
      label: t.reports,
    },
    {
      href: "/settings",
      icon: FiSettings,
      label: t.settings,
    },
  ];

  if (!isClient)
    return (
      <div className="absolute left-0 top-0 z-[9999] flex h-screen w-full items-center justify-center bg-bgPrimary">
        <Spinner />
      </div>
    );

  return (
    <>
      <header dir={language === "ar" ? "rtl" : "ltr"}>
        <div>
          <header
            className={`sticky inset-x-0 top-0 z-[48] flex w-full flex-wrap bg-bgPrimary py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-4 lg:ps-64`}
          >
            <nav
              className="mx-auto flex w-full basis-full items-center px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="me-5 lg:me-0 lg:hidden">
                <Link
                  className="inline-block flex-none rounded-xl text-xl font-semibold focus:opacity-80 focus:outline-none"
                  href="/"
                  aria-label="Preline"
                >
                  <img src="/images/Opream.png" alt="Opream Icon" />
                </Link>
              </div>

              <div className="ms-auto flex w-full items-center justify-end sm:order-3 sm:justify-between sm:gap-x-3">
                <div className="sm:hidden">
                  <button
                    type="button"
                    className="inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-textPrimary hover:bg-bgSecondary disabled:pointer-events-none disabled:opacity-50"
                  >
                    <svg
                      className="size-4 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>

                <div className="hidden sm:block"></div>
                <div
                  className={`${
                    language === "ar"
                      ? bool
                        ? "mr-[28px]"
                        : "-mr-[180px]"
                      : bool
                        ? "ml-[28px]"
                        : "-ml-[180px]"
                  } -mb-4 flex h-full w-full items-center justify-between text-center max-[502px]:grid max-[502px]:justify-center lg:flex`}
                >
                  <div className="mb-3 hidden w-full md:block">
                    <label htmlFor="icon" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 start-0 z-20 flex items-center ps-4">
                        <FaSearch className="text-textSecondary" size={16} />
                      </div>
                      <input
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        id="icon"
                        name="icon"
                        className="block h-12 w-full bg-bgSecondary px-4 py-2 ps-11 text-sm outline-none focus:border-primary2 focus:ring-primary2 disabled:pointer-events-none disabled:opacity-50"
                        placeholder={t.search}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-end gap-2">
                  <Switch
                    checked={theme === "dark"}
                    onCheckedChange={handleThemeChange}
                    className="mx-1"
                  />
                  <LanguageSwitcher />
                  <Link
                    href="/notifies"
                    className="relative inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full text-sm font-semibold text-textPrimary hover:bg-bgSecondary disabled:pointer-events-none disabled:opacity-50"
                  >
                    <IoNotificationsOutline
                      className="text-textSecondary"
                      size={25}
                    />
                  </Link>

                  <div className="relative inline-flex w-[60px] sm:w-[225px] justify-end">
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger asChild>
                        <button
                          onClick={toggleProfile}
                          id="dropdown-trigger"
                          type="button"
                          className="outline-none focus:outline-none focus:ring-none disabled:pointer-events-none disabled:opacity-50"
                        >
                          <div className="flex items-center gap-3 sm:justify-center">
                            <img
                              className="h-12 w-12 rounded-full sm:rounded-lg ring-2 ring-bgSecondary"
                              src="/images/profile.png"
                              alt="User Avatar"
                            />
                            <div className="hidden sm:flex sm:flex-col sm:items-start">
                              <Text
                                size="md"
                                font="semiBold"
                                className="text-textPrimary"
                              >
                                {t.userName}
                              </Text>
                              <Text size="sm" className="text-textSecondary">
                                {t.userRole}
                              </Text>
                            </div>
                            <MdKeyboardArrowDown
                              size={20}
                              className="hidden text-textSecondary transition-transform duration-200 sm:block"
                            />
                          </div>
                        </button>
                      </DropdownMenu.Trigger>

                      {profile && (
                        <DropdownMenu.Content
                          className={`absolute ${language == "ar" ? "-left-36" : "right-0"} top-1 z-10 mt-2 min-w-[250px] rounded-lg bg-bgPrimary p-3 text-textPrimary shadow-md`}
                          aria-labelledby="dropdown-trigger"
                          align="end"
                          sideOffset={5}
                        >
                          {/* Header */}
                          <div className="mb-3 border-b border-bgSecondary pb-3">
                            <p className="text-sm text-textSecondary">
                              {t.signedInAs}
                            </p>
                            <p className="text-sm font-medium text-textPrimary">
                              {userData?.email}
                            </p>
                          </div>

                          {/* Links */}
                          <div className="space-y-2">
                            <DropdownMenu.Item asChild>
                              <Link
                                href="/profile"
                                className="flex items-center gap-x-3 rounded-md px-3 py-2 text-sm text-textPrimary hover:bg-bgSecondary hover:text-primary"
                              >
                                <svg
                                  className="h-4 w-4 flex-shrink-0"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                  <circle cx="9" cy="7" r="4" />
                                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                {t.profile}
                              </Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item asChild>
                              <a
                                onClick={() => DeleteCookie()}
                                href="/login"
                                className="flex items-center gap-x-3 rounded-md px-3 py-2 text-sm text-error hover:bg-error hover:text-white"
                              >
                                {t.signOut}
                              </a>
                            </DropdownMenu.Item>
                          </div>
                        </DropdownMenu.Content>
                      )}
                    </DropdownMenu.Root>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div className="sticky inset-x-0 top-0 z-20 border-y border-borderPrimary bg-bgPrimary px-4 sm:px-6 md:px-8 lg:hidden">
            <div className="flex items-center justify-between py-2">
              <ol className="ms-3 flex items-center whitespace-nowrap">
                <li className="flex items-center text-sm text-textPrimary">
                  {/* Breadcrumb or other content */}
                </li>
              </ol>

              <button
                onClick={OpenSideBar}
                type="button"
                className="flex items-center justify-center gap-x-1.5 rounded-lg border border-borderPrimary px-3 py-2 text-xs text-textSecondary hover:text-textPrimary"
                data-hs-overlay="#application-sidebar"
                aria-controls="application-sidebar"
                aria-label="Sidebar"
              >
                <svg
                  className="size-4 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 8L21 12L17 16M3 12H13M3 6H13M3 18H13" />
                </svg>
                <span className="sr-only">Sidebar</span>
              </button>
            </div>
          </div>
          {isOpen && (
            <div
              id="application-sidebar"
              className={`hs-overlay hs-overlay-open:translate-x-0 transform transition-all duration-300 [--auto-close:lg] ${
                small ? "w-[90px]" : "w-[300px]"
              } drop-shadow-2xl lg:drop-shadow-none ${
                !isOpen ? "w-0" : ""
              } fixed inset-y-0 start-0 z-[60] overflow-visible bg-bgPrimary duration-300 ease-in lg:bottom-0 lg:end-auto lg:block lg:translate-x-0`}
            >
              <div
                className={`flex items-center ${small ? "justify-center" : "justify-between"} p-6`}
              >
                <div className="flex justify-start">
                  <Link href="/">
                    {small ? (
                      <img
                        className="mt-5 scale-[2]"
                        src="/images/Opream.png"
                        alt="Logo"
                      />
                    ) : (
                      <div className="flex items-center justify-center gap-1">
                        <img
                          className="w-[25px]"
                          src="/images/Opream.png"
                          alt="Logo"
                        />
                        <Text size={"xl"} font={"semiBold"} color={"primary2"}>
                          {t.opream}
                        </Text>
                        <Text size={"xl"} font={"semiBold"}>
                          {t.onWay}
                        </Text>
                      </div>
                    )}
                  </Link>
                </div>
                <div className="flex justify-end">
                  {!small && (
                    <button onClick={toggleNavbarSmall}>
                      <svg
                        className="h-8 w-8 text-textPrimary"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              <nav
                className={`hs-accordion-group flex w-full flex-col flex-wrap p-6 ${
                  !isOpen ? "hidden" : ""
                } `}
                data-hs-accordion-always-open
              >
                <ul className="space-y-1.5">
                  <div
                    className={`flex ${small ? "w-[40px]" : ""} justify-center`}
                  >
                    {small && (
                      <button onClick={toggleNavbarSmall}>
                        <svg
                          className="h-6 w-6 text-textPrimary"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="9 6 15 12 9 18" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {navLinks.map((link) => (
                    <NavBarLink
                      key={link.href}
                      href={link.href}
                      icon={link.icon}
                      label={link.label}
                      small={small}
                      url={url}
                      isDropdownOpen={dropdownOpen === link.href}
                      toggleDropdown={() =>
                        setDropdownOpen((prev) =>
                          prev === link.href ? null : link.href,
                        )
                      }
                    >
                      {link.children}
                    </NavBarLink>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default NavBar;
